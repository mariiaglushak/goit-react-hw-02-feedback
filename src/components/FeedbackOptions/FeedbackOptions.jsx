import { FeedbackBtn } from './FeedbackOptionsStyle';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn onClick={onLeaveFeedback} type="button" key={option}>
      {option}
    </FeedbackBtn>
  ));
};

export default FeedbackOptions;


