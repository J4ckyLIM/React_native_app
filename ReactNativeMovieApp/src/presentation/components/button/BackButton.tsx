import React from 'react';

import { styled } from '../../theme';
import ArrowLeftBlack from '../../resources/svg_icons/arrowLeftBlack.svg';
import ArrowLeftWhite from '../../resources/svg_icons/arrowLeftWhite.svg';

export enum ArrowDirection {
  left = 'left',
  down = 'down',
}

export enum ArrowColor {
  white = 'white',
  black = 'black',
}

const Container = styled.SafeAreaView<{ top: number; left: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const Touchable = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  width: 40px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const BackButton = ({
  onPress,
  top = 0,
  left = 0,
  arrowOrientation = ArrowDirection.left,
  color,
  backgroundColor = 'transparent',
}: {
  onPress: () => void;
  top?: number;
  left?: number;
  arrowOrientation?: ArrowDirection;
  color?: ArrowColor;
  backgroundColor?: string;
}) => (
  <Container top={top} left={left}>
    <Touchable onPress={onPress} backgroundColor={backgroundColor}>
      {arrowOrientation === ArrowDirection.left &&
        color === ArrowColor.black && <ArrowLeftBlack />}

      {arrowOrientation === ArrowDirection.left &&
        color === ArrowColor.white && <ArrowLeftWhite />}
    </Touchable>
  </Container>
);
