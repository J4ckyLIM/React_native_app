import React, { useMemo } from 'react';
import { Avatar, Icon } from 'react-native-elements';

import { User } from '../../../domain/User';
import { styled } from '../../theme';
import { SecondaryLabel, TitleLabel } from '../label/Labels';
import { Block } from '../layout/Block';
import { ColumnContainer, RowContainer } from '../layout/Containers';
import { VerticalSpacer } from '../layout/Spacer';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
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
          <VerticalSpacer spacing={3} />
          <SecondaryLabel>{user.role}</SecondaryLabel>
          <VerticalSpacer spacing={7} />
          <RowContainer>
            <Icon name="facebook-square" color="#00aced" type="antdesign" />
            <Icon name="twitter" color="#00aced" type="antdesign" />
            <Icon name="linkedin-square" color="#00aced" type="antdesign" />
            <Icon name="github" color="#00aced" type="antdesign" />
          </RowContainer>
        </ColumnContainer>
      </Container>
    </Block>
  );
};
