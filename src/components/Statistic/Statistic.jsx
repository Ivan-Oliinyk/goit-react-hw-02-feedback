import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StatisticContent = styled.div`
  ul {
    list-style: none;

    li {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticContent>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </StatisticContent>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
