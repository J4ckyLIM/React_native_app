import React, { useMemo } from 'react';
import { Avatar, Icon } from 'react-native-elements';

import { User } from '../../../domain/User';
import { styled } from '../../theme';
import { Block } from '../layout/Block';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const ColumnContainer = styled.View`
  flex-direction: column;
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
`;

const TitleLabel = styled.Text`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fontFamily.heavy};
`;

const SecondaryLabel = styled.Text`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

const MediaContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  padding-vertical: ${({ theme }) => theme.spacing.s};
  align-items: center;
  flex-direction: row;
`;

export const UserCard = ({ user }: { user: User }) => {
  const fullName = useMemo(() => {
    return `${user.firstName} ${user.lastName}`;
  }, [user]);

  return (
    <Block>
      <Container>
        <Avatar
          rounded
          source={{
            uri: user.thumbnailURL,
          }}
          size="large"
        />
        <ColumnContainer>
          <TitleLabel>{fullName}</TitleLabel>
          <SecondaryLabel>{user.role}</SecondaryLabel>
          <MediaContainer>
            <Icon name="facebook-square" color="#00aced" type="antdesign" />
            <Icon name="twitter" color="#00aced" type="antdesign" />
            <Icon name="linkedin-square" color="#00aced" type="antdesign" />
            <Icon name="github" color="#00aced" type="antdesign" />
          </MediaContainer>
        </ColumnContainer>
      </Container>
    </Block>
  );
};
