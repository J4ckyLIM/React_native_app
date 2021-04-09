import { normalizeSize } from '../../utils/sizes';

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
    backgroundColor: '#F2F4F4',
    blockBackgroundColor: '#FFFFFF',
    inAppScreenBackroundColor: '#F2F4F4',
    inAppDarkScreenBackgroundColor: 'rgb(21, 21, 21)',
    defaultTextColor: '#0d0e10',
    lightColor: '#eaf6ff',
    pagingColor: 'black',
    shadowColor: 'rgb(23, 25, 29)',
    mainBackgroundColor: 'rgb(15, 15, 10)',
    titleColor: '#FFFFFF',
    secondaryTextColor: '#c9c9c9',
  },
  fontSizes: {
    small: normalizeSize(11),
    normal: normalizeSize(14),
    large: normalizeSize(17),
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
