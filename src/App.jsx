import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
