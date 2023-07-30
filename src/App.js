import Header from "./components/Header";
import Card from "./components/Card";
import Input from "./components/Input";
import "./App.css";

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
        <Input />
      </div>
    </div>
  );
}

export default App;
