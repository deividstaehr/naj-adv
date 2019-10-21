import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #efefef;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentConainerStyle: {padding: 30},
})``;
