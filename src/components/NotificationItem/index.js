import React from 'react';
import PropTypes from 'prop-types';

import {Container, Title, Message, Left, Right} from './styles';

export default function NotificationItem({title, message, ...rest}) {
  return (
    <Container {...rest}>
      <Left />
      <Right>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Right>
    </Container>
  );
}

NotificationItem.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.string,
};
