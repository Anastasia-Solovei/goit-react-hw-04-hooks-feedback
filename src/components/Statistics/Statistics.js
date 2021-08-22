import React from "react";

import s from "./Statistics.module.css";
import Notification from "../Notification";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul>
          <li className={s.option}>Good: {good}</li>
          <li className={s.option}>Neutral: {neutral}</li>
          <li className={s.option}>Bad: {bad}</li>
          <li className={s.option}>Total: {total}</li>
          <li className={s.option}>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
