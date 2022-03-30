export default function Header(props) {

    return (
        <>
            <h1>Pense em um número de 1 a 100</h1>
            <button
                className="start-game-btn"
                onClick={props.startGame}>{props.gameStarted ? "REINICIAR JOGO" : "INICIAR JOGO" }
            </button>
        </>
        
    )
}
