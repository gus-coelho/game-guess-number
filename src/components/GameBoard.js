import React, { useEffect, useState } from 'react'
import Game from './Game'
import Header from './Header'

export default function GameBoard() {
    
    const [counter, setCounter] = useState(0)
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(100)
    const [guess, setGuess] = useState(null)
    const [gameStarted, setGameStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
        setGuess(Math.floor(Math.random() * (max - min + 1)) + min)
    }, [min, max])

    function isLesser() {
        if (min !== max && !gameOver) {
            setMax(guess - 1)
            incrementCounter()
        }
    }

    function isGreater() {
        if (min !== max && !gameOver) {
            setMin(guess + 1)
            incrementCounter()
        }
    }

    function isCorrect() {
        setGameOver(true)
    }

    function incrementCounter() {
        setCounter(prevCounter => prevCounter  + 1)
    }
    
    function startGame() {
        
        if (!gameStarted) {
            setGameStarted(true)
            incrementCounter()
        } else {
            setGameStarted(false)
            setCounter(0)
            setMin(1)
            setMax(100)
            setGameOver(false)
        }
     }

    return (
        <div className='container'>
            <Header 
                startGame={startGame}
                gameStarted={gameStarted}
            />
            {gameStarted && <Game 
                counter={counter}
                guess={guess}
                isLesser={isLesser}
                isGreater={isGreater}
                isCorrect={isCorrect}
                gameOver={gameOver}
            />}
        </div>)
}