import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Role, User } from '../../domain/User';
import { UserCard } from '../components/card/UserCard';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { theme } from '../theme';

export const InfoScreen = ({ navigation }: NavigationInjectedProps) => {
  const userList: User[] = [
    new User(
      'Cédric',
      'LEPROHON',
      Role.scm,
      'https://media-exp1.licdn.com/dms/image/C4D03AQEdigvKhQETzg/profile-displayphoto-shrink_400_400/0/1533131358694?e=1623283200&v=beta&t=NCi7-1Mg9HUm4NG22blpn7a-seUtdfE9W3cfx7pG4Ms',
    ),
    new User(
      'Boubacar',
      'YATERA',
      Role.pm,
      'https://media-exp1.licdn.com/dms/image/C5603AQEH5fHnMPN8ng/profile-displayphoto-shrink_400_400/0/1541525125393?e=1623283200&v=beta&t=jOeJzpWNA-DQdfbODCxNE7vTGO6sKCP1qmtMTNUx-7M',
    ),
    new User(
      'Florian',
      'GUSTIN',
      Role.dev,
      'https://media-exp1.licdn.com/dms/image/C4D03AQFfORc6eYjTzw/profile-displayphoto-shrink_400_400/0/1598951794388?e=1623283200&v=beta&t=3G6SZPwU0Jt3qxpAa077ZpoH_LCxTK_UllKVx31tF9U',
    ),
    new User(
      'Jacky',
      'LIM',
      Role.dev,
      'https://media-exp1.licdn.com/dms/image/C4D03AQH8sVLIyzMgGw/profile-displayphoto-shrink_800_800/0/1616491675629?e=1623283200&v=beta&t=G_haUh9rnS_ESdURYdGDcQfvKj68kDkAux4obhWD-yw',
    ),
  ];
  return (
    <ScreenContainer
      mainViewProps={{
        style: {
          backgroundColor: theme.colors.inAppDarkScreenBackgroundColor,
          padding: theme.spacing.m,
        },
      }}
      headerTitle={'Informations'}
      showHeaderTitle={true}
      headerTitleColor={theme.colors.titleColor}>
      {userList &&
        userList.map(user => <UserCard user={user} key={user.firstName} />)}
    </ScreenContainer>
  );
};
