import styled, { css } from "styled-components";
import { breakpoints } from "../../Components/Common/breakpoints";
import { hide, hover01, hover03 } from "../../Components/Common/Common.styled";

const StyledPopBrowse = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &:target {
    display: block;
  }

  @media screen and (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;

const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTtl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    height: 37px;
  }
`;

const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    width: 100%;

    button {
      margin-right: 0px;
    }
  }
`;

const ButtonBor = css`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  a {
    color: #565eef;
  }
`;

const ButtonBg = css`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  a {
    color: #ffffff;
  }
`;

const ButtonMenu = styled.button`
  ${ButtonBg}
  ${hover01}
`;

const ButtonActionForTest = styled.button`
  ${ButtonBor}
  ${hover03}
`;

const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  @media screen and (max-width: ${breakpoints.md}px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`;

const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  /* ${hide} */
  @media screen and (max-width: ${breakpoints.md}px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`;

const CategoriesP = styled.p`
  margin-bottom: 14px;
  ${SubTtl}
`;

const ThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    display: block;
    margin-bottom: 20px;
  }
`;

const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;

const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export {
  StyledPopBrowse,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseTopBlock,
  PopBrowseTtl,
  FormBrowseBlock,
  SubTtl,
  FormBrowseArea,
  ButtonBor,
  ButtonBg,
  ButtonMenu,
  ButtonActionForTest,
  ButtonGroup,
  PopBrowseBtnEdit,
  PopBrowseBtnBrowse,
  CategoriesP,
  ThemeDownCategories,
  PopBrowseForm,
  PopBrowseWrap,
};
