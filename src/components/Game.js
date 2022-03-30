import React from 'react'

export default function Game(props) {
    const { counter, guess, isLesser, isGreater, isCorrect, gameOver } = props
    
    return (
        <div className='container'>
            <h1>Você pensou no número {guess}?</h1>
            <button className='game-btn' onClick={isLesser}>É MENOR</button>
            <button className='game-btn' onClick={isGreater}>É MAIOR</button>
            <button className='game-btn' onClick={isCorrect}>ACERTOU!</button>
            {gameOver && <h1 className='message-text'>ACERTEI EM {counter} TENTATIVA{counter > 1 && 'S'}!</h1>}
            <p>Tentativas: {counter}</p>
        </div>
    )
}
