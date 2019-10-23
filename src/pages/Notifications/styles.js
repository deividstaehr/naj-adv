import styled from 'styled-components/native';

import {fonts} from '~/config/styles';

export const Container = styled.View`
  flex: 1;
  background: #efefef;
`;

export const List = styled.SectionList.attrs({
  showsVerticalScrollIndicator: false,
  contentConainerStyle: {padding: 30},
})``;

export const EmptyNotification = styled.View`
  padding: 15px;
  background-color: #fff;
`;

export const EmptyNotificationText = styled.Text`
  font-family: ${fonts.regular};
  text-align: center;
`;

export const RefreshText = styled.Text`
  font-family: ${fonts.bold};
  text-align: center;
  text-transform: uppercase;
  padding-left: 5px;
`;

export const RefreshButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
