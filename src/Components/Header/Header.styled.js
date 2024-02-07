import styled from "styled-components";
import { breakpoints } from "../Common/breakpoints";
import { hover02 } from "../Common/Common.styled";

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => (props.$changeTheme ? "#20202C" : "#ffffff")};
`;

const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.$changeTheme ? "#FFF" : "#565eef")};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    border-color: ${(props) => (props.$changeTheme ? "#FFF" : "#565eef")};
  }

  ${hover02}
`;

export {
  HeaderLogo,
  StyledHeader,
  HeaderBlock,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
};
