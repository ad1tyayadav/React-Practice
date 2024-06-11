import { useState } from "react"
import { genrateRandNum, sum } from "./functions";
import Ticket from "./Ticket";
import Button from "./Button";


export default function Lottery({ n = 3, winCondition }) {

    let [lotteryNo, setLotteryNo] = useState(genrateRandNum(n));

    let isWinner = winCondition(lotteryNo);

    let getLotteryNo = () => {
        setLotteryNo(genrateRandNum(n));
    }
    return (
        <>
            <h2>Lottery</h2>
            <div>
                <h3>Ticket No: &nbsp;
                    <Ticket ticket={lotteryNo} />
                </h3>
                <Button action={getLotteryNo} />
                <h2>{isWinner && "Congrats, You won 10000$"}</h2>
            </div>
        </>
    )
}