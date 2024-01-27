import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { CategoryName } from "../../Components/Common/themeStyles";
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
  WrapperCalendar,
} from "./PopNewCard.styled";
import { addTasks } from "../../../api";
import { useState } from "react";
import LoadingCards from "../LoadingPagesForHomePage/LoadingCards";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { TaskHook } from "../../hooks/useTaskHook";
import { UserHook } from "../../hooks/useUserHook";
import { format } from "date-fns";

export default function PopNewCard() {
  const { setCards } = TaskHook();
  const { user } = UserHook();

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState(false);
  const [dataTask, setDataTask] = useState({
    nameTask: "",
    description: "",
  });

  const navigate = useNavigate(null);

  const handlerAddNewTask = async (event) => {
    event.preventDefault();
    if (!dataTask.nameTask || !dataTask.description || !topic) return;

    setIsLoading(true);
    const userData = JSON.parse(user);
    const token = userData.token;

    await addTasks({ setCards, token, dataTask, selectedDay, topic });
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
              <WrapperCalendar>
                <DayPicker
                  showOutsideDays
                  mode="single"
                  onSelect={setSelectedDay}
                  required
                  selected={selectedDay}
                />
                <p>You selected {format(selectedDay, "PPP")}.</p>
              </WrapperCalendar>
            </PopNewCardWrap>
            <PopNewCardCategories>
              <SubTtlP>Категория</SubTtlP>
              <CategoriesThemes>
                <CategoriesTheme
                  onClick={() => setTopic("Web Design")}
                  $themeColor="Web Design"
                >
                  <CategoryName $themeColor="Web Design">
                    Web Design
                  </CategoryName>
                </CategoriesTheme>
                <CategoriesTheme
                  $themeColor="Research"
                  onClick={() => setTopic("Research")}
                  checked
                >
                  <CategoryName $themeColor="Research">Research</CategoryName>
                </CategoriesTheme>
                <CategoriesTheme
                  $themeColor="Copywriting"
                  onClick={() => setTopic("Copywriting")}
                >
                  <CategoryName $themeColor="Copywriting">
                    Copywriting
                  </CategoryName>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate onClick={handlerAddNewTask} id="btnCreate">
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}
