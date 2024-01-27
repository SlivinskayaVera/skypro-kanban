import { Link, useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { CategoryName } from "../../Components/Common/themeStyles";
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
} from "./PopBrowsePage.styled";
import { delTasks } from "../../../api";
import { DayPicker } from "react-day-picker";
import { TaskHook } from "../../hooks/useTaskHook";
import { UserHook } from "../../hooks/useUserHook";
import { WrapperCalendar } from "../PopNewCardPage/PopNewCard.styled";
import { format } from "date-fns";

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
          <div className="pop-browse__content">
            <PopBrowseTopBlock>
              <PopBrowseTtl>{dataTask.title}</PopBrowseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <CategoryName $themeColor="Web Design">Web Design</CategoryName>
              </div>
            </PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">{dataTask.status}</p>
                </div>
              </div>
            </div>
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
                  // selected={selectedDay}
                />

                <p>Срок исполнения: {format(dataTask.date, "dd.MM.yyyy")}</p>
              </WrapperCalendar>
            </PopBrowseWrap>
            <ThemeDownCategories>
              <CategoriesP>Категория</CategoriesP>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
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
          </div>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}
