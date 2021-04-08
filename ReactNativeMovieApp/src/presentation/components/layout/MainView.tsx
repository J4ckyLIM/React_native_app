import { css, styled } from "../../theme";

export const MainView = styled.View<{
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  backgroundColor?: string;
}>`
  align-items: center;
  flex: 1;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.defaultTextColor};
  flex-direction: column;

  padding-vertical: ${({ theme }) => theme.spacing.m};
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
`;