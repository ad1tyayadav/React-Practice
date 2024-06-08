import { useState } from 'react'

function LikeBtn() {

    let [isLike, setIsLike] = useState(true);
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(currCount => currCount + 1);
    }

    let toggle = () => {
        setIsLike(!isLike);
    }


    return (
        <>
            <h3>Like Btn</h3>
            <div onClick={incCount}>Count : {count}
                <p onClick={toggle}>{isLike ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}</p>
            </div>

        </>
    )

}

function LudoGame() {
    let [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 })

    let addBlue = () => {
        setMoves(prevMoves => ({ ...prevMoves, blue: prevMoves.blue + 1 }));
    }
    let addGreen = () => {
        setMoves(prevMoves => ({ ...prevMoves, green: prevMoves.green + 1 }));
    }
    let addYellow = () => {
        setMoves(prevMoves => ({ ...prevMoves, yellow: prevMoves.yellow + 1 }));
    }
    let addRed = () => {
        setMoves(prevMoves => ({ ...prevMoves, red: prevMoves.red + 1 }));
    }

    return (
        <>
            <h2>Game Begins!</h2>
            <div className='board'>
                <p>Blue Moves: {moves.blue}</p>
                <button onClick={addBlue} style={{ backgroundColor: "blue" }}>+1</button>
                <p>Green Moves: {moves.green}</p>
                <button onClick={addGreen} style={{ backgroundColor: "green" }}>+1</button>
                <p>Yellow Moves: {moves.yellow}</p>
                <button onClick={addYellow} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
                <p>Red Moves: {moves.red}</p>
                <button onClick={addRed} style={{ backgroundColor: "red" }}>+1</button>
            </div>
        </>
    )
}

export default LudoGame