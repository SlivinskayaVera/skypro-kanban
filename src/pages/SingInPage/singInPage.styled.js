import styled from "styled-components";
import { breakpoints } from "../../Components/Common/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

const ContainerSignIn = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.sm}px) {
    background-color: #ffffff;
  }
`;

const ModalTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: ${breakpoints.sm}px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:first-child {
    margin-bottom: 7px;
  }
`;

const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid;
  border-color: ${(props) => (props.$wrongUserData ? "red" : "rgba(148, 166, 190, 0.4)")};
  outline: none;
  padding: 10px 8px;

  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

const ModalBtnEnter = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${(props) => (props.$wrongUserData ? "#94A6BE" : "#565eef")};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  &:hover {
    background-color: ${(props) => (props.$wrongUserData ? "#94A6BE" : "#33399b")};
  }

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    height: 40px;
  }
`;

const ModalFormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }
  a {
    text-decoration: underline;
  }
`;
export {
  Wrapper,
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  ModalBtnEnter,
  ModalFormGroup,
};
