import PropTypes from 'prop-types';

import { MainSection, MainTitle } from './SectionStyle';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <MainTitle>{title}</MainTitle>
      {children}
    </MainSection>
  );
};

export default Section;

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
