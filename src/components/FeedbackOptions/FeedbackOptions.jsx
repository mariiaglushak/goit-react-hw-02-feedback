import PropTypes from 'prop-types'
import css from "./FeedbackStyle.module.css"




const FeedbackOptions = ({ onLeaveFeedback, onClick }) => {
    return (
        <button onClick={onClick} type='button' className={css.statButton}>
            {onLeaveFeedback}
    </button>
    )
}
export default FeedbackOptions

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.string.isRequired,
    onClick: PropTypes.func
}