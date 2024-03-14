import styled, { css } from "styled-components";
import { breakpoints } from "./breakpoints";

const hide = css`
  display: none;
`;

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const TextErrorAndLoading = styled.p`
  color: ${(props) => (props.$changeTheme ? "#FFF" : "black")};
  text-align: center;
  font-size: 30px;
`;

const Image = styled.img`
  padding: 25px;
`;

const hover01 = css`
  &:hover {
    background-color: ${(props) =>
      props.$errorMessage || props.$wrongUserData ? "#94A6BE" : "#33399b"};
  }
`;

const hover02 = css`
  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }
`;

const MessageError = styled.p`
  padding-top: 7px;
  color: #f84d4d;
  text-align: center;
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

export {
  hide,
  Container,
  TextErrorAndLoading,
  Image,
  hover01,
  hover03,
  hover02,
  MessageError,
};
