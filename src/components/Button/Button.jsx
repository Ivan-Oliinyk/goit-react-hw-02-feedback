import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonComponent = styled.button`
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;

const Button = ({ buttonName, onLeaveFeedback }) => {
  return (
    <ButtonComponent onClick={() => onLeaveFeedback(buttonName)} type="button">
      {buttonName}
    </ButtonComponent>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
