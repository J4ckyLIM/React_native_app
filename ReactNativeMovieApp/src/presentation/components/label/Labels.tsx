import { styled } from '../../theme';

export const TitleLabel = styled.Text<{ isCenter?: boolean }>`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fontFamily.heavy};
  text-align: ${({ theme, isCenter = false }) =>
    isCenter ? 'center' : 'left'};
`;

export const SecondaryLabel = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.fontSizes.normal}px;
`;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.inputPlaceholder};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSizes.normal}px;
`;
