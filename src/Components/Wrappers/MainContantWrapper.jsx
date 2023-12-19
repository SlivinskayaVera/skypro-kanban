import MainColumn from "../Columns/MainColumn.jsx";
// import { cardList } from "../../../data.js";

export default function MainContentWrapper({cards}) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <div className="container">
      <div className="main__block">
        <div className="main__content">
          {statusList.map((status) => (
            <MainColumn
              key={status}
              title={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
