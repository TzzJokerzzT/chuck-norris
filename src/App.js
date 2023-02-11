import HeaderChuck from "./components/Header";
import Footer from "./components/Footer";
import Random from "./components/Bottom-Random";
import { Input } from "./components/Input";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <HeaderChuck />
      <Input />
      <Random />
      <Footer />
    </div>
  );
};

export default App;
