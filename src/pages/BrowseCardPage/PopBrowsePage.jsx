import { Link, useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import {
  StyledPopBrowse,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseTopBlock,
  PopBrowseTtl,
  FormBrowseBlock,
  SubTtl,
  FormBrowseArea,
  ButtonMenu,
  ButtonActionForTest,
  ButtonGroup,
  PopBrowseBtnBrowse,
  CategoriesP,
  ThemeDownCategories,
  PopBrowseForm,
  PopBrowseWrap,
  PopBrowseContent,
  SubTtlP,
} from "./PopBrowsePage.styled";
import { delTasks } from "../../../api";
import { DayPicker } from "react-day-picker";
import { TaskHook } from "../../hooks/useTaskHook";
import { UserHook } from "../../hooks/useUserHook";
import {
  CategoriesTheme,
  WrapperCalendar,
} from "../PopNewCardPage/PopNewCard.styled";
import { format } from "date-fns";
import {
  PopBrowseStatus,
  StatusThemeActive,
  StatusThemes,
} from "../EditTaskPage/EditTaskPage.styled";
import { ThemeHook } from "../../hooks/useThemeHook";
import { ru } from "date-fns/locale";

export default function PopBrowse() {
  let { id } = useParams();
  const { setCards, cards } = TaskHook();
  const navigate = useNavigate(null);
  const { user } = UserHook();

  const handlerDeleteTask = async (event) => {
    event.preventDefault();
    const userData = JSON.parse(user);
    const token = userData.token;
    await delTasks({ setCards, id, token });
    navigate(AppRoutes.HOME);
  };
  const dataTask = cards.find((card) => card._id === id);
  const { changeTheme } = ThemeHook();

  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock $changeTheme={changeTheme}>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl $changeTheme={changeTheme}>
                {dataTask.title}
              </PopBrowseTtl>
              <CategoriesTheme
                $changeTheme={changeTheme}
                $active
                $hide
                $themeColor={dataTask.topic}
              >
                {dataTask.topic}
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <SubTtlP $changeTheme={changeTheme}>Статус</SubTtlP>
              <StatusThemes>
                <StatusThemeActive>{dataTask.status}</StatusThemeActive>
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <SubTtl $changeTheme={changeTheme} htmlFor="textArea01">
                    Описание задачи
                  </SubTtl>
                  <FormBrowseArea
                    $changeTheme={changeTheme}
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Описание задачи"
                    defaultValue={dataTask.description}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <WrapperCalendar>
                <SubTtlP $changeTheme={changeTheme}>Даты</SubTtlP>
                <style>{`.rdp {--rdp-cell-size: 30px; --rdp-caption-font-size: 14px; --rdp-selected-color: #FFF}; --rdp-accent-color: green;`}</style>

                <DayPicker
                  locale={ru}
                  showOutsideDays
                  mode="single"
                  // onSelect={setSelectedDay}
                  required
                  selected={new Date(dataTask.date)}
                />

                <p>
                  <span>Срок исполнения: </span>{" "}
                  {format(dataTask.date, "dd.MM.yyyy")}
                </p>
              </WrapperCalendar>
            </PopBrowseWrap>
            <ThemeDownCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme $active $themeColor={dataTask.topic}>
                {dataTask.topic}
              </CategoriesTheme>
            </ThemeDownCategories>
            <PopBrowseBtnBrowse>
              <ButtonGroup>
                <ButtonActionForTest $changeTheme={changeTheme}>
                  <Link to={`/edit-card/${id}`}>Редактировать задачу</Link>
                </ButtonActionForTest>
                <ButtonActionForTest
                  $changeTheme={changeTheme}
                  onClick={handlerDeleteTask}
                >
                  Удалить задачу
                </ButtonActionForTest>
              </ButtonGroup>
              <ButtonMenu>
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </ButtonMenu>
            </PopBrowseBtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}
