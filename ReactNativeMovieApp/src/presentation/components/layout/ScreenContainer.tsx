import React, { ReactElement, useCallback } from 'react';
import { ViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { wrapScrollView } from 'react-native-scroll-into-view';
import {
  NavigationInjectedProps,
  SafeAreaView,
  withNavigation,
} from 'react-navigation';

import { styled } from '../../theme';
import { ArrowDirection, ArrowColor, BackButton } from '../button/BackButton';

import { MainView } from './MainView';

const ScreenContainerScrollView = styled(
  wrapScrollView(KeyboardAwareScrollView),
)`
  flex-grow: 1;
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.inAppDarkScreenBackgroundColor};
`;

const FloatingBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  top: 40;
  left: 15;
  z-index: 5;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const HeaderFirstLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-vertical: ${({ theme }) => theme.spacing.s}px;
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
  width: 100%;
`;

const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 0.7;
`;

const HeaderTitle = styled.Text<{ headerTitleColor: string }>`
  color: ${props => props.headerTitleColor};
  font-family: ${({ theme }) => theme.fontFamily.heavy};
  font-size: ${({ theme }) => theme.fontSizes.big};
  letter-spacing: -0.4;
`;

const HeaderSecondLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: ${({ theme }) => theme.spacing.s}px;
  padding-horizontal: ${({ theme }) => theme.spacing.xs}px;
  width: 100%;
`;

interface BaseScreenOptions extends NavigationInjectedProps {
  children?: React.ReactNode;
  mainViewProps?: ViewProps;
  headerTitleColor?: string;
  overStatusBar?: boolean;
  showHeaderTitle?: boolean;
  showSubtitleHeader?: boolean;
  displayGoBackArrow?: boolean;
  displayFloatingBackArrow?: boolean;
  customGoBack?: () => void;
  headerTitle?: string;
  headerSubTitleColor?: string;
  headerSubTitle?: ReactElement;
  backArrowOrientation?: ArrowDirection;
  backArrowColor?: ArrowColor;
  backArrowBackgroundColor?: string;
}

const ScreenContainerComponent = ({
  navigation,
  headerTitle,
  headerTitleColor = 'rgb(0,0,0)',
  showHeaderTitle = false,
  showSubtitleHeader = false,
  headerSubTitleColor = 'black',
  displayGoBackArrow = true,
  displayFloatingBackArrow = false,
  backArrowOrientation = ArrowDirection.left,
  backArrowColor = ArrowColor.black,
  backArrowBackgroundColor = 'white',
  ...props
}: BaseScreenOptions) => {
  const canGoBack =
    (navigation.dangerouslyGetParent()?.state.index ?? 0) > 0 ||
    props.customGoBack;
  const goBack = props.customGoBack || navigation.goBack;

  return (
    <>
      <ScreenContainerScrollView
        bounces={true}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{
            top: props.overStatusBar ? 'never' : 'always',
            bottom: 'never',
          }}>
          {displayFloatingBackArrow && (
            <FloatingBackButton>
              <BackButton
                onPress={() => goBack()}
                color={backArrowColor}
                arrowOrientation={backArrowOrientation}
                backgroundColor={backArrowBackgroundColor}
              />
            </FloatingBackButton>
          )}

          <HeaderContainer>
            <HeaderFirstLine>
              <HeaderLeft>
                {canGoBack &&
                  displayGoBackArrow &&
                  !displayFloatingBackArrow && (
                    <BackButton
                      top={props.overStatusBar ? 30 : 0}
                      arrowOrientation={backArrowOrientation}
                      color={backArrowColor}
                      onPress={() => goBack()}
                    />
                  )}
                {showHeaderTitle && (
                  <HeaderTitle headerTitleColor={headerTitleColor}>
                    {headerTitle}
                  </HeaderTitle>
                )}
              </HeaderLeft>
            </HeaderFirstLine>
            {showSubtitleHeader && props.headerSubTitle && (
              <HeaderSecondLine>{props.headerSubTitle}</HeaderSecondLine>
            )}
          </HeaderContainer>

          <MainView {...props.mainViewProps}>{props.children}</MainView>
        </SafeAreaView>
      </ScreenContainerScrollView>
    </>
  );
};

export const ScreenContainer = withNavigation(ScreenContainerComponent);
