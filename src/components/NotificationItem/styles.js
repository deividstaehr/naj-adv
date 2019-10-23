import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '~/config/styles';

export const MaterialIcon = styled(Icon)``;

export const Container = styled.TouchableOpacity`
  background: #fff;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.05);
`;

export const Left = styled.View`
  padding: 5px;
  background: #f66;
`;

export const Right = styled.View`
  padding: 15px 10px;
  justify-content: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-family: 'Quicksand-Bold';
`;

export const DateTime = styled.Text`
  text-align: right;
  padding-right: 15px;
`;

export const Message = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  font-family: '${fonts.regular}';
`;

export const IconBox = styled.View`
  background: #f66;
  padding: 5px;
  width: 68px;
  height: 68px;
  border-radius: 34px;
  justify-content: center;
  align-items: center;
`;
