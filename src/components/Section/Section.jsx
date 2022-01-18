import propTypes from "prop-types";
import React from "react";
import { SectionWrapper } from "./SectionStyled";

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
  children: propTypes.element,
};

export default Section;
