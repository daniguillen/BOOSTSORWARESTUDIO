
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./Index.css";

function Index() {
  return (
    <>
      <div className="containerIndex" style={{ maxHeight: "100vh" }}>
        <Main />
        <Footer />
      </div>
    </>
  );
}
export default Index;
