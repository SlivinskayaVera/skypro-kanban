import MainColumn from "../Columns/MainColumn.jsx";
import { statusList } from "../../../data.js";

export default function MainContentWrapper({ cards }) {
  return (
    <main className="main">
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
    </main>
  );
}
