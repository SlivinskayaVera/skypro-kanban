import CardItem from "./CardItem.jsx";
import tasksList from "./TasksList.jsx";
import MainColumn from "./MainColumn.jsx";

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      {/* pop-up start */}
      {children}
      {/* pop-up end*/}

      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
            <MainColumn nameColomn={'Без статуса'}>
                {tasksList.map((task) => (
                  <CardItem
                    name={task.name}
                    colorTheme={task.colorTheme}
                    key={task.id}
                  />
                ))}
              </MainColumn>
              <MainColumn nameColomn={'Надо сделать'}>
                {tasksList.map((task) => (
                  <CardItem
                    name={task.name}
                    colorTheme={task.colorTheme}
                    key={task.id}
                  />
                ))}
              </MainColumn>
              <MainColumn nameColomn={'В работе'}>
                {tasksList.map((task) => (
                  <CardItem
                    name={task.name}
                    colorTheme={task.colorTheme}
                    key={task.id}
                  />
                ))}
              </MainColumn>
              <MainColumn nameColomn={'Тестирование'}>
                {tasksList.map((task) => (
                  <CardItem
                    name={task.name}
                    colorTheme={task.colorTheme}
                    key={task.id}
                  />
                ))}
              </MainColumn>
              <MainColumn nameColomn={'Готово'}>
                {tasksList.map((task) => (
                  <CardItem
                    name={task.name}
                    colorTheme={task.colorTheme}
                    key={task.id}
                  />
                ))}
              </MainColumn>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
