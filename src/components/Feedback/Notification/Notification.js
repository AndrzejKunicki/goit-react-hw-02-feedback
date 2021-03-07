import React from "react";

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.defaultProps = {
  message: " ",
};

export default Notification;
