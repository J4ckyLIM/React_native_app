import { normalizeSize } from "../../utils/sizes";

import { spacing } from './spacing';

export enum fontFamilies {
  regular = 'regular',
  medium = 'medium',
  heavy = 'heavy',
  black = 'black',
  fat = 'fat',
}

export const theme = {
  colors: {
    darkTitles: 'rgb(44,49,67)',
    subtitlesH1: 'rgb(44,49,67)',
    backgroundColor: '#F2F4F4',
    blockBackgroundColor: '#FFFFFF',
    inAppScreenBackroundColor: '#F2F4F4',
    defaultTextColor: '#0d0e10',
    lightColor: '#eaf6ff',
    disabledColor: '#D7D8DA',
    borderColor: '#d8d8d8',
    pagingColor: 'black',
    shadowColor: 'rgb(23, 25, 29)',
    inputBorderColor: '#DFE2E7',
    inputPlaceholder: '#c9c9c9',
    transparentButtonColor: '#ffffff00',
    dangerColor: '#CC4545',
  },
  fontSizes: {
    small: normalizeSize(11),
    normal: normalizeSize(14),
    large: normalizeSize(18),
    big: normalizeSize(24),
  } as { [key: string]: number },
  spacing,
  fontFamily: {
    regular: 'Avenir-Light',
    medium: 'Avenir-Medium',
    heavy: 'Avenir-Heavy',
  },
  lineHeight: {
    close: 1.15,
  },
  fontWeights: {
    large: '400',
  },
};

export type Theme = typeof theme;