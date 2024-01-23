import styled from "styled-components";

export const themeStyles = {
  Copywriting: {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  "Web Design": {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  Research: {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  },
  _gray: {
    backgroundColor: "#94a6be",
    color: "#ffffff",
  },
};

export const CategoryName = styled.p`
  background-color: ${(props) =>
    themeStyles[props.$themeColor].backgroundColor};
  color: ${(props) => themeStyles[props.$themeColor].color};
`;


