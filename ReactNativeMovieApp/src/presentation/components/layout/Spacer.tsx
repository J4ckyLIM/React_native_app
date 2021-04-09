import { styled } from '../../theme';
import { SpacingKey } from '../../theme/spacing';

export const VerticalSpacer = styled.View<{
  spacing: SpacingKey | number;
}>`
  height: ${props => {
    if (typeof props.spacing === 'number') {
      return `${props.spacing}`;
    }

    return props.theme.spacing[props.spacing];
  }};
  background-color: ${props => 'transparent'};
`;
