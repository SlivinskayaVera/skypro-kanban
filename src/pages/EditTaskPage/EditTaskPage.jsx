import { Link, useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { editTasks } from "../../../api";
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

  const handlerEditTask = async (event) => {
    event.preventDefault();
    const userData = JSON.parse(user);
    const token = userData.token;
    await editTasks({ setCards, id, token, newDataTask });
    navigate(AppRoutes.HOME);
    // навигатор на карту с айди
  };

  //   const statusTask = cards.filter((card) => card._id === id)[0].status;

  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <div className="pop-browse__content">
            <PopBrowseTopBlock>
              <PopBrowseTtl>{newDataTask.title}</PopBrowseTtl>
              <CategoriesTheme $active $hide $themeColor={dataTask.topic}>
                {dataTask.topic}
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <SubTtl>Статус</SubTtl>
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
                  <SubTtl htmlFor="textArea01">Описание задачи</SubTtl>
                  <FormBrowseArea
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
                <DayPicker
                  showOutsideDays
                  mode="single"
                  onSelect={setSelectedDay}
                  required
                  selected={selectedDay}
                />
                <p>
                  Срок исполнения:{" "}
                  <span className="date-control">
                    {format(selectedDay, "dd.MM.yyyy")}
                  </span>
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
                <ButtonActionForTest>Отменить</ButtonActionForTest>
                <ButtonActionForTest id="btnDelete">
                  Удалить задачу
                </ButtonActionForTest>
              </ButtonGroup>
              <ButtonMenu>
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </ButtonMenu>
            </PopBrowseBtnEdit>
          </div>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}
