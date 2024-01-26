import styled from "styled-components";
import { hover01 } from "../../Components/Common/Common.styled";
import { breakpoints } from "../../Components/Common/breakpoints";
import { themeStyles } from "../../Components/Common/themeStyles";

const StyledPopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }

  @media screen and (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

const PopNewCardContainer = styled.div`
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

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
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

const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

const PopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 14px;
`;

const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${hover01}

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
  }
`;

const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

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
`;

const FormNewArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

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
    height: 34px;
  }
`;

const SubTtl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const SubTtlP = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

const CategoriesTheme = styled.button`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-style: none;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => props.$active ? 1 : 0.4};
  background-color: ${(props) =>
    themeStyles[props.$themeColor].backgroundColor};
  color: ${(props) => themeStyles[props.$themeColor].color};



  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export {
  StyledPopNewCard,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardWrap,
  PopNewCardTtl,
  CategoriesThemes,
  FormNewBlock,
  FormNewCreate,
  PopNewCardForm,
  FormNewInput,
  FormNewArea,
  SubTtl,
  SubTtlP,
  PopNewCardCategories,
  CategoriesTheme,
};
