import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Spain from "./Pages/Spain";
import Argentina from "./Pages/Argentina";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container py-4">
        <Header name="TermoMetron" />
        <p>Hola!! <br /> bienvenido o bienvenida a TermoMetron. La app que te tira la temperatura con onda. 
          Hace click en una de las city del amba y listo. 
          <br />
          hacele caso! no seas zapallo
        </p>
        <Link to="spain">Spain</Link>
        <br></br>
        <Link to="Argentina">Argentina</Link>
        <Routes>
          <Route path="spain" element={ <Spain/>} />
          <Route path="Argentina" element={ <Argentina/>} />
        </Routes>
        {/* <Input /> */}
      </div>
    </div>
  );
}

export default App;
