import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((buttonName) => (
    <Button
      key={buttonName}
      buttonName={buttonName}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
