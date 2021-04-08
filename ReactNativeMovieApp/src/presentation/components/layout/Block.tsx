import { styled } from "../../theme";

export const Block = styled.View<{ padding?: number; marginTop?: number }>`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.m}px;
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  padding: ${({ theme, padding = theme.spacing.l }) => padding}px;
  background-color: ${props => props.theme.colors.blockBackgroundColor};
  border-radius: 15px;
  align-items: center;
`;