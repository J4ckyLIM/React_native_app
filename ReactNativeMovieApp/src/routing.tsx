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

import { DetailsScreen } from './presentation/screens/Details';
import { HomeScreen } from './presentation/screens/Home';
import { ProfileScreen } from './presentation/screens/Profile';
import { InAppRoute, Routes } from './routes';
// import { Icon } from 'react-native-vector-icons/Icon';

const tabStackOptions = {
  headerBackTitleVisible: false,
  headerMode: 'none',
  mode: 'card',
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
} as NavigationStackRouterConfig;

const getIconNameFromRoute = (routeName: InAppRoute) => {
  switch (routeName) {
    case InAppRoute.Home:
      return 'auto-fix';
    case InAppRoute.Profile:
      return 'cash';
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

const ProfileStack = createStackNavigator(
  {
    [Routes.Profile]: ProfileScreen,
  },
  {
    initialRouteName: Routes.Profile,
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
    [InAppRoute.Profile]: ProfileStack,
  },
  {
    initialRouteName: InAppRoute.Home,
    order: [InAppRoute.Home, InAppRoute.Profile],
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = getIconNameFromRoute(routeName as InAppRoute);

        // return <Icon name={iconName} size={25} color={tintColor} />;
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
        console.log(`Entering ${currentRouteName}`);
      }
    }}
  />
);
