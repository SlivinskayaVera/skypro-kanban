export default function PageWrapper({  children }) {
  return (
    <div className="wrapper">
      {/* pop-up start */}
      {children}
      {/* pop-up end*/}
    </div>
  );
}
