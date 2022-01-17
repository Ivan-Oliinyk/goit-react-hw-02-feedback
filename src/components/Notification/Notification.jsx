import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NotificationContent = styled.div`
  font-size: 20px;
`;

const Notification = ({ message }) => {
  return <NotificationContent>{message}</NotificationContent>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
