import {
  GestureResponderEvent,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

import { css, fontFamilies, styled } from '../../theme';

interface MainButtonProps extends TouchableOpacityProps {
  label: string;
  width?: string | number;
  isUpperCase?: boolean;
  textAlign?: TextStyle['textAlign'];
  fontFamily?: fontFamilies;
  maxWidth?: number;
}
export const MainButton = ({
  label,
  width,
  isUpperCase,
  textAlign = 'center',
  fontFamily = fontFamilies.regular,
  maxWidth,
  ...props
}: MainButtonProps) => (
  <ButtonContainer
    width={width}
    maxWidth={maxWidth}
    onPress={(event: GestureResponderEvent) => {
      if (props.onPress) props.onPress(event);
    }}>
    <ButtonLabel
      upperCase={isUpperCase}
      textAlign={textAlign}
      fontFamily={fontFamily}>
      {label}
    </ButtonLabel>
  </ButtonContainer>
);

export const ButtonContainer = styled.TouchableOpacity<{
  width?: string | number;
  maxWidth?: number;
}>`
  background-color: ${({ theme }) => theme.colors.disabledColor};
  border-radius: ${({ theme }) => theme.spacing.sm};
  height: ${({ theme }) => theme.spacing.xl};
  padding-horizontal: ${({ theme }) => theme.spacing.l};
  justify-content: center;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  max-width: ${({ maxWidth }) => {
    if (maxWidth === undefined) {
      return '100%';
    }
    return maxWidth;
  }};
`;

export const ButtonLabel = styled.Text<{
  upperCase?: boolean;
  textAlign?: string;
  fontFamily?: fontFamilies;
}>`
  color: ${({ theme }) => theme.colors.blockBackgroundColor};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme, fontFamily }) => theme.fontFamily[fontFamily]};
  ${({ upperCase }) =>
    upperCase &&
    css`
      text-transform: uppercase;
    `}
  ${({ theme }) =>
    css`
      text-decoration-color: ${theme.colors.pagingColor};
    `}
`;
