import styled from "styled-components";
import { hover03 } from "../Common/Common.styled";

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${(props) => (props.$changeTheme ? "#202229" : "#fff")};
  padding: 34px;
  text-align: center;
  z-index: 2;
  box-shadow: 0px 10px 39px 0px rgba(148, 166, 190, 0.4);

  &:target {
    display: block;
  }

  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565eef;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${(props) => (props.$changeTheme ? "#FFF" : "#565eef")};
  }
  a {
    color: ${(props) => (props.$changeTheme ? "#FFF" : "#565eef")};
  }
`;

export const PopUserSetName = styled.p`
  color: ${(props) => (props.$changeTheme ? "#FFFFFF" : "#000")};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${(props) => (props.$changeTheme ? "#FFFFFF" : "#000")};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${(props) => (props.$changeTheme ? "#FFF" : "#eaeef6")};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$changeTheme ? "#565EEF" : "#94a6be"};
    transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const ExitBtn = styled.button`
  ${hover03}
`;
