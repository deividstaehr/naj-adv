import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #fff;
  font-size: 18px;
  font-family: 'Quicksand-Bold';
`;
