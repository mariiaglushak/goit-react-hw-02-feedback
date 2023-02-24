import PropTypes from 'prop-types';
import { StatisticsText, StatisticsResult } from './StatisticsStyle';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatisticsText>
        Good:<StatisticsResult>{good}</StatisticsResult>
      </StatisticsText>
      <StatisticsText>
        Neutral:<StatisticsResult>{neutral}</StatisticsResult>
      </StatisticsText>
      <StatisticsText>
        Bad:<StatisticsResult>{bad}</StatisticsResult>
      </StatisticsText>
      <StatisticsText>
        Total:<StatisticsResult>{total()}</StatisticsResult>
      </StatisticsText>
      <StatisticsText>
        Positive feedback:
        <StatisticsResult>{positivePercentage()}%</StatisticsResult>
      </StatisticsText>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
