import styled from "styled-components";
import { themeStyles } from "../Common/themeStyles";
import { ThemeP } from "../ThemeP/ThemeP";

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};
  background-color: ${({ $themeColor, $changeTheme }) =>
    $changeTheme
      ? themeStyles[$themeColor]?.color
      : themeStyles[$themeColor]?.backgroundColor};

  ${ThemeP} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
    color: ${({ $themeColor, $changeTheme }) =>
      $changeTheme
        ? themeStyles[$themeColor]?.backgroundColor
        : themeStyles[$themeColor]?.color};
  }
`;
