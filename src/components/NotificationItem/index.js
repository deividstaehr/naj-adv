/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';

import {Container, Title, Message, DateTime, Left, Right} from './styles';

export default function NotificationItem({
  title,
  dateTime,
  message,
  viewed,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Left style={viewed && {backgroundColor: '#d1d1d1'}} />
      <Right>
        <Title>{title}</Title>
        <DateTime>{dateTime}</DateTime>
        <Message>{message}</Message>
      </Right>
    </Container>
  );
}

NotificationItem.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  dateTime: PropTypes.string,
};
