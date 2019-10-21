/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import {Container, Box, Text} from './styles';

export default function ActionItem({content}) {
  const [offset, setOffset] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 50,
    }),
  );

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 5,
      bounciness: 20,
    }).start();
  }, [offset]);

  return (
    <Animated.View style={[{transform: [{translateY: offset.y}]}]}>
      <Container>
        <Box>
          <Text>{content}</Text>
        </Box>
      </Container>
    </Animated.View>
  );
}
