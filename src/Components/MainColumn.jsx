export default function MainColumn({nameColomn, children}) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{nameColomn}</p>
      </div>
      <div className="cards">
        {children}
      </div>
    </div>
  );
}
