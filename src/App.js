import HeaderChuck from "./components/Header";
import Footer from "./components/Footer";
import Random from "./components/Bottom-Random";
import Disclaimer from "./components/Disclaimer";
import { Input } from "./components/Input";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <HeaderChuck />
      <Input />
      <Random />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default App;
