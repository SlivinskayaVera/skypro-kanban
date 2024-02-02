import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => (props.$changeTheme ? "#151419" : "#f1f1f1")};
`;

export { Wrapper };
