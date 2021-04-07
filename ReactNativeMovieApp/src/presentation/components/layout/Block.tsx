import { styled } from "../../theme";

export const Block = styled.View<{ padding?: number; marginTop?: number }>`
  width: 100%;
  margin-bottom: 16px;
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  padding: 24px;
  background-color: 'rgb(255,255,255)';
  border-radius: 15px;
  align-items: center;
`;