import MainContentWrapper from "./MainContantWrapper.jsx";

export default function PageWrapper({ children }) {
  return (
    <div className="wrapper">
      {/* pop-up start */}
      {children}
      {/* pop-up end*/}

      <main className="main">
        <MainContentWrapper />
      </main>
    </div>
  );
}
