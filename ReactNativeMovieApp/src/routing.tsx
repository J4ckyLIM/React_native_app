import {
  createAppContainer,
  NavigationStackRouterConfig,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Animated, Easing } from 'react-native';
import { Card } from 'react-native-paper';

import { DetailsScreen } from './presentation/screens/Details';
import { HomeScreen } from './presentation/screens/Home';
import { InfoScreen } from './presentation/screens/Info';
import { InAppRoute, Routes } from './routes';

const tabStackOptions = {
  headerBackTitleVisible: false,
  headerMode: 'none',
  mode: 'card',
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
} as NavigationStackRouterConfig;

const getIconSourceURIFromRoute = (routeName: InAppRoute) => {
  switch (routeName) {
    case InAppRoute.Home:
      return 'https://img.flaticon.com/icons/png/512/25/25694.png?size=630x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF';
    case InAppRoute.Info:
      return 'https://image.freepik.com/icones-gratuites/info-logo-dans-cercle_318-947.jpg';
  }
};

const HomeStack = createStackNavigator(
  {
    [Routes.Home]: HomeScreen,
    [Routes.Details]: DetailsScreen,
  },
  {
    initialRouteName: Routes.Home,
    headerBackTitleVisible: false,
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      screenInterpolator: () => {},
    }),
  },
);

const InfoStack = createStackNavigator(
  {
    [Routes.Info]: InfoScreen,
  },
  {
    initialRouteName: Routes.Info,
    headerBackTitleVisible: false,
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      screenInterpolator: () => {},
    }),
  },
);

const InAppBottomTabNavigation = createBottomTabNavigator(
  {
    [InAppRoute.Home]: HomeStack,
    [InAppRoute.Info]: InfoStack,
  },
  {
    initialRouteName: InAppRoute.Home,
    order: [InAppRoute.Home, InAppRoute.Info],
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const iconURI = getIconSourceURIFromRoute(routeName as InAppRoute);

        return (
          <Card.Cover
            source={{ uri: iconURI }}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        );
      },
    }),
  },
);

const InAppStackNavigator = createStackNavigator(
  {
    [Routes.InAppTab]: InAppBottomTabNavigation,
  },
  {
    initialRouteName: Routes.InAppTab,
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {
      opacity: 1.0,
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    [Routes.InApp]: InAppStackNavigator,
  },
  {
    initialRouteName: Routes.InApp,
    headerBackTitleVisible: false,
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      screenInterpolator: () => {},
    }),
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
    cardShadowEnabled: false,
  },
);

// gets the current screen from navigation state
export const getActiveRouteName = (navigationState: any): any => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

export const AppContainer = createAppContainer(AppNavigator);

export const AppContainerWithScreenTracking = () => (
  <AppContainer
    onNavigationStateChange={(prevState, currentState) => {
      const currentRouteName = getActiveRouteName(currentState);
      const previousRouteName = getActiveRouteName(prevState);
      if (previousRouteName !== currentRouteName) {
        // eslint-disable-next-line no-console
        console.log(`Entering ${currentRouteName}`);
      }
    }}
  />
);
