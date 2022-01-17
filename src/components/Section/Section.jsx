import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  margin-bottom: 15px;

  h1 {
    font-size: 26px;
  }
`;

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <h1>{title}</h1>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
