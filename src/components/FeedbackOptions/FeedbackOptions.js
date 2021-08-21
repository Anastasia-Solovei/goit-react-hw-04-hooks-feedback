import React from "react";

import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      name={feedback}
      onClick={onLeaveFeedback}
      className={s.button}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <FeedbackButton
      key={option}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackButton.propTypes = {
  feedback: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
