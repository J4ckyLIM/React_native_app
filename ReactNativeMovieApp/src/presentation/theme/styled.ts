import baseStyled, {
  css as baseCss,
  ReactNativeStyledInterface,
} from 'styled-components/native';
import { ThemedCssFunction } from 'styled-components';

import { Theme } from './theme';

export const styled = (baseStyled as unknown) as ReactNativeStyledInterface<Theme>;
export const css = baseCss as ThemedCssFunction<Theme>;
