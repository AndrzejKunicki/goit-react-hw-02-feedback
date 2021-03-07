import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((item, i) => (
        <button
          type="button"
          onClick={onLeaveFeedback[i]}
          className={styles.button}
          key={item}
        >
          {item}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired),
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
