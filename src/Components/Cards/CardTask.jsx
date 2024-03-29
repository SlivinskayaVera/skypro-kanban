import { CardTheme } from "./CardTheme";
import { ThemeP } from "../ThemeP/ThemeP";
import { Link } from "react-router-dom";
import {
  CardGroup,
  CardsItem,
  CardContent,
  CardDate,
  CardTitle,
  CardsCard,
  CardBtn,
} from "./Card.styled";
import { format, parseISO } from "date-fns";
import { ThemeHook } from "../../hooks/useThemeHook";
import { Draggable } from "react-beautiful-dnd";

function CardTask({ theme, title, date, id, index }) {
  const correctDate = format(new Date(parseISO(date)), "dd.MM.yyyy");
  const { changeTheme } = ThemeHook();

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardsItem>
            <CardsCard $changeTheme={changeTheme}>
              <CardGroup>
                <CardTheme $changeTheme={changeTheme} $themeColor={theme}>
                  <ThemeP>{theme}</ThemeP>
                </CardTheme>
                <Link to={`/edit-card/${id}`}>
                  <CardBtn>
                    <div />
                    <div />
                    <div />
                  </CardBtn>
                </Link>
              </CardGroup>
              <CardContent>
                <Link to={`/card/${id}`}>
                  <CardTitle $changeTheme={changeTheme}>{title}</CardTitle>
                </Link>
                <CardDate>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={13}
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_415)">
                      <path
                        d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                        stroke="#94A6BE"
                        strokeWidth="0.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                        stroke="#94A6BE"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_415">
                        <rect width={13} height={13} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{correctDate}</p>
                </CardDate>
              </CardContent>
            </CardsCard>
          </CardsItem>
        </div>
      )}
    </Draggable>
  );
}

export default CardTask;
