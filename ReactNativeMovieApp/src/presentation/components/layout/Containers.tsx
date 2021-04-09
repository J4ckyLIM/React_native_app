import { styled } from '../../theme';

export const RowContainer = styled.View<{
  isCentered?: boolean;
  spaceBetween?: boolean;
}>`
  flex: 1;
  flex-direction: row;
  justify-content: ${({ spaceBetween = true }) =>
    spaceBetween ? 'space-between' : 'space-evenly'};
  align-items: ${({ isCentered = true }) =>
    isCentered ? 'center' : 'flex-start'};
  width: 100%;
`;

export const ColumnContainer = styled.View<{ isCentered?: boolean }>`
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
  justify-content: ${({ isCentered = false }) =>
    isCentered ? 'center' : 'space-evenly'};
  align-items: ${({ isCentered = false }) =>
    isCentered ? 'center' : 'stretch'};
`;
