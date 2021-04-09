import { Dimensions } from 'react-native';

export const { width: screenWidth } = Dimensions.get('window');
export const { height: screenHeight } = Dimensions.get('window');

const STANDARD_WIDTH = 400;
const STANDARD_HEIGHT = 640;
const MIN_TABLET_HEIGHT = 976;
const MIN_TABLET_WIDTH = 768;
const RESIZE_FACTOR = 0.5;

export const normalizeSize = (fontSize: number): number =>
  fontSize * (1 - RESIZE_FACTOR) +
  (RESIZE_FACTOR * (fontSize * screenWidth)) / STANDARD_WIDTH;

export const isSmallScreen = screenWidth < STANDARD_WIDTH;
export const isVerticallySmallScreen = screenHeight < STANDARD_HEIGHT;
export const screenRatio = screenHeight / screenWidth;
export const isTabletPortrait =
  screenHeight >= MIN_TABLET_HEIGHT &&
  screenWidth >= MIN_TABLET_WIDTH &&
  screenRatio < 1.4;
