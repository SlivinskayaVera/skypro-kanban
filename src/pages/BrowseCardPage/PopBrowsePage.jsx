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

  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{dataTask.title}</PopBrowseTtl>
              <CategoriesTheme $active $hide $themeColor={dataTask.topic}>
                {dataTask.topic}
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <SubTtlP>Статус</SubTtlP>
              <StatusThemes>
                <StatusThemeActive>{dataTask.status}</StatusThemeActive>
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <SubTtl htmlFor="textArea01">Описание задачи</SubTtl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={dataTask.description}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <WrapperCalendar>
                <DayPicker
                  showOutsideDays
                  mode="single"
                  // onSelect={setSelectedDay}
                  required
                  selected={new Date(dataTask.date)}
                />

                <p>Срок исполнения: {format(dataTask.date, "dd.MM.yyyy")}</p>
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
                <ButtonActionForTest>
                  <Link to={`/edit-card/${id}`}>Редактировать задачу</Link>
                </ButtonActionForTest>
                <ButtonActionForTest onClick={handlerDeleteTask}>
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
