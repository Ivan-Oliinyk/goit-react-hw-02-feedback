import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./ButtonStyled";

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
