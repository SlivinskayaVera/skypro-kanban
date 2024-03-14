import styled from "styled-components";
import { breakpoints } from "../Common/breakpoints";

const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardsItem = styled.div`
  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }

    100% {
      height: auto;
      opacity: 1;
    }
  }
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }

  svg {
    width: 13px;
  }
`;

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => (props.$changeTheme ? "#FFFFFF" : "#000000")};
  margin-bottom: 10px;
`;

const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(props) => (props.$changeTheme ? "#20202C" : "#ffffff")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 220px;
    height: 130px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export {
  CardGroup,
  CardsItem,
  CardContent,
  CardDate,
  CardTitle,
  CardsCard,
  CardBtn,
};
