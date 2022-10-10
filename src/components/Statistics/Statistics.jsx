import PropTypes from 'prop-types'
import css from "./Statistics.module.css"


const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    
    return (
        <div>
             <h2 className={css.statTitle}>Statistics</h2>
             <p className={css.statText}>Good:<span className={css.statResult}>{good}</span></p>
             <p className={css.statText}>Neutral:<span className={css.statResult}>{neutral}</span></p>
             <p className={css.statText}>Bad:<span className={css.statResult}>{bad}</span></p>
             <p className={css.statText}>Total:<span className={css.statResult}>{countTotalFeedback()}</span></p>
            <p className={css.statText}>Positive feedback:<span className={css.statResult}>{countPositiveFeedbackPercentage()}%</span></p>
        </div>
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func
}