import s from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
        <div>
            <p className={s.item}>Good: {good}</p>
            <p className={s.item}>Neutral: {neutral}</p>
            <p className={s.item}>Bad: {bad}</p>
            <p className={s.item}>Total: {total}</p>
            <p className={s.item}>Positive feedback: { percent}%</p>
    </div>
)
}

export default Statistics