import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #3f51b5;
  color: #fff;
  padding: 15px;
  font-family: 'Quicksand-Regular';
`;

export const Text = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding: 10px 0;
`;

export const Box = styled.View`
  background: #fff;
`;

export const Line = styled.View`
  flex-direction: row;
  padding: 10px 15px;
`;

export const LineTitle = styled.Text`
  font-family: 'Quicksand-Bold';
`;

export const LineText = styled.Text`
  font-family: 'Quicksand-Regular';
  margin-left: 5px;
`;

export const LogoutButton = styled(Button)`
  width: 100%;
`;
