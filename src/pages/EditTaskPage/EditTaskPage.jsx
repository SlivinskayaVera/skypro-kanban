import { Link, useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { delTasks, editTasks } from "../../../api";
import { DayPicker } from "react-day-picker";
import { TaskHook } from "../../hooks/useTaskHook";
import { UserHook } from "../../hooks/useUserHook";
import {
  PopBrowseTopBlock,
  StyledPopBrowse,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseTtl,
  FormBrowseBlock,
  SubTtl,
  FormBrowseArea,
  ButtonMenu,
  ButtonActionForTest,
  ButtonGroup,
  PopBrowseBtnEdit,
  CategoriesP,
  ThemeDownCategories,
  PopBrowseForm,
  PopBrowseWrap,
  PopBrowseContent,
  SubTtlP,
} from "../BrowseCardPage/PopBrowsePage.styled";
import { useState } from "react";
import {
  CategoriesTheme,
  WrapperCalendar,
} from "../PopNewCardPage/PopNewCard.styled";
import { format } from "date-fns";
import {
  PopBrowseStatus,
  StatusTheme,
  StatusThemes,
} from "./EditTaskPage.styled";
import { ThemeHook } from "../../hooks/useThemeHook";
import { ru } from "date-fns/locale";

export default function EditTaskPage() {
  let { id } = useParams();
  const { setCards, cards } = TaskHook();
  const dataTask = cards.find((card) => card._id === id);
  const navigate = useNavigate(null);
  const { user } = UserHook();
  const [selectedDay, setSelectedDay] = useState(new Date(dataTask.date));
  const [newDataTask, setNewDataTask] = useState({
    title: dataTask.title,
    topic: dataTask.topic,
    status: dataTask.status,
    description: dataTask.description,
    date: dataTask.date,
  });

  const handlerDeleteTask = async (event) => {
    event.preventDefault();
    const userData = JSON.parse(user);
    const token = userData.token;
    await delTasks({ setCards, id, token });
    navigate(AppRoutes.HOME);
  };

  const handlerEditTask = async (event) => {
    event.preventDefault();
    const userData = JSON.parse(user);
    const token = userData.token;
    await editTasks({ setCards, id, token, newDataTask });
    navigate(`/card/${id}`);
  };

  function handlerCancelEditTask() {
    navigate(`/card/${id}`);
  }

  const { changeTheme } = ThemeHook();

  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock $changeTheme={changeTheme}>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl $changeTheme={changeTheme}>
                {newDataTask.title}
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
                <StatusTheme
                  onClick={() =>
                    setNewDataTask({ ...newDataTask, status: "Без статуса" })
                  }
                >
                  Без статуса
                </StatusTheme>
                <StatusTheme
                  onClick={() =>
                    setNewDataTask({ ...newDataTask, status: "Нужно сделать" })
                  }
                >
                  Нужно сделать
                </StatusTheme>
                <StatusTheme
                  onClick={() =>
                    setNewDataTask({ ...newDataTask, status: "В работе" })
                  }
                >
                  В работе
                </StatusTheme>
                <StatusTheme
                  onClick={() =>
                    setNewDataTask({ ...newDataTask, status: "Тестирование" })
                  }
                >
                  Тестирование
                </StatusTheme>
                <StatusTheme
                  onClick={() =>
                    setNewDataTask({ ...newDataTask, status: "Готово" })
                  }
                >
                  Готово
                </StatusTheme>
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
                    placeholder="Введите описание задачи..."
                    defaultValue={dataTask.description}
                    onChange={(e) =>
                      setNewDataTask({
                        ...newDataTask,
                        description: e.target.value,
                      })
                    }
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
                  onSelect={setSelectedDay}
                  required
                  selected={selectedDay}
                />
                <p>
                  <span>Срок исполнения: </span>
                  {format(selectedDay, "dd.MM.yyyy")}
                </p>
              </WrapperCalendar>
            </PopBrowseWrap>
            <ThemeDownCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme $active $themeColor={dataTask.topic}>
                {dataTask.topic}
              </CategoriesTheme>
            </ThemeDownCategories>
            <PopBrowseBtnEdit>
              <ButtonGroup>
                <ButtonMenu onClick={handlerEditTask}>Сохранить</ButtonMenu>
                <ButtonActionForTest
                  $changeTheme={changeTheme}
                  onClick={handlerCancelEditTask}
                >
                  Отменить
                </ButtonActionForTest>
                <ButtonActionForTest
                  $changeTheme={changeTheme}
                  onClick={handlerDeleteTask}
                  id="btnDelete"
                >
                  Удалить задачу
                </ButtonActionForTest>
              </ButtonGroup>
              <ButtonMenu>
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </ButtonMenu>
            </PopBrowseBtnEdit>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}
