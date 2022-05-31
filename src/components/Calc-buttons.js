export const CalcBtn = ({content, onClick, className,...props})=>{
    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    )
}