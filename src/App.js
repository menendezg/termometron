import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container py-4">
        <Header name="TermoMetron" />
        <Card />
      </div>
    </div>
  );
}

export default App;
