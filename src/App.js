import HeaderChuck from "./components/Header";
import Footer from "./components/Footer";
import Random from "./components/Bottom-Random";
import { Input } from "./components/Input";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <HeaderChuck className="header" />
      <Input className="jesting" />
      <Random className="random" />
      <Footer className="footer" />
    </div>
  );
};

export default App;
