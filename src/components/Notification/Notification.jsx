import React from "react";
import PropTypes from "prop-types";
import { NotificationContent } from "./NotificationStyled";

const Notification = ({ message }) => {
  return <NotificationContent>{message}</NotificationContent>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
