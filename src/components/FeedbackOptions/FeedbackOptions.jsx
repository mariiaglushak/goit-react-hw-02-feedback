import PropTypes from 'prop-types';

import { FeedbackBtn } from './FeedbackOptionsStyle';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn onClick={onLeaveFeedback} type="button" key={option}>
      {option}
    </FeedbackBtn>
  ));
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
