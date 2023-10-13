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


