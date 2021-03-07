import React from "react";

import styles from "./Section.module.css";

const Section = ({ children, title }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

Section.defaultProps = {
  title: "",
};

export default Section;
