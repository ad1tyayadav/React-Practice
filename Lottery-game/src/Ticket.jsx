import LotteryNum from "./TicketNum";

export default function Ticket({ ticket }) {
    return (
        <div>
            {ticket.map((num, idx) => (
                <LotteryNum num={num} key={idx} />
            ))}
        </div>
    );
}