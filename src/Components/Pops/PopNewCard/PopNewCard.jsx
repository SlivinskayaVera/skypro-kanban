import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../pages/appRoutes";
import { CategoryName } from "../../Common/themeStyles";
import {
  StyledPopNewCard,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardWrap,
  PopNewCardTtl,
  CategoriesThemes,
  FormNewCreate,
  FormNewBlock,
  PopNewCardForm,
  FormNewInput,
  FormNewArea,
  SubTtl,
  PopNewCardCategories,
  CategoriesTheme,
  SubTtlP,
} from "./popNewCard.styled";
import { addTasks } from "../../../../api";
import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "../../../contexts/tasksContext";
import LoadingCards from "../../../pages/LoadingPagesForHomePage/LoadingCards";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function PopNewCard() {
  const { setCards } = useContext(TasksContext);

  const [dataTask, setDataTask] = useState({
    nameTask: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(null);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const handlerAddNewTask = async (event) => {
    event.preventDefault();
    if (!dataTask.nameTask || !dataTask.description) return;

    await setIsLoading(true);
    await addTasks({ setCards, dataTask, selectedDay });
    await setIsLoading(false);
    navigate(AppRoutes.HOME);
  };

  return isLoading ? (
    <LoadingCards />
  ) : (
    <StyledPopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <Link className="pop-new-card__close" to={AppRoutes.HOME}>
              ✖
            </Link>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <SubTtl htmlFor="formTitle">Название задачи</SubTtl>
                  <FormNewInput
                    value={dataTask.nameTask}
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                    onChange={(e) =>
                      setDataTask({ ...dataTask, nameTask: e.target.value })
                    }
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={dataTask.description}
                    onChange={(e) =>
                      setDataTask({ ...dataTask, description: e.target.value })
                    }
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <>
                <DayPicker
                  showOutsideDays
                  mode="single"
                  onSelect={setSelectedDay}
                  required
                  selected={selectedDay}
                />
                {/* <div className="calendar__period">
                  <p className="calendar__p date-end">
                    <p>You selected {format(selectedDay, "PPP")}.</p>
                    Выберите срок исполнения <span className="date-control" />.
                  </p>
                </div> */}
              </>
            </PopNewCardWrap>
            <PopNewCardCategories>
              <SubTtlP>Категория</SubTtlP>
              <CategoriesThemes>
                <CategoriesTheme
                  $themeColor="Web Design"
                  className="_active-category"
                >
                  <CategoryName $themeColor="Web Design">
                    Web Design
                  </CategoryName>
                </CategoriesTheme>
                <CategoriesTheme $themeColor="Research">
                  <CategoryName $themeColor="Research">Research</CategoryName>
                </CategoriesTheme>
                <CategoriesTheme $themeColor="Copywriting">
                  <CategoryName $themeColor="Copywriting">
                    Copywriting
                  </CategoryName>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate onClick={handlerAddNewTask} id="btnCreate">
              {/* <Link to={AppRoutes.HOME}>Создать задачу</Link> */}
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}
