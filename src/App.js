import "./App.css";
import { Body } from "./components/body/Body";
import Footer from "./components/footer/Footer";
import TopLogo from "./components/logo/TopLogo";
import NavbarTop from "./components/navbar/NavbarTop";
import Categories from "./components/new categories/Categories";

function App() {
  return (
    <div className="App">
      <h2>Tes Interview</h2>
      <div className="container">
        <TopLogo />
        <NavbarTop />
      </div>
      <Body />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
