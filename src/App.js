import Header from "./components/Header";
import Card from "./components/Card";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container py-4">
        <Header name="TermoMetron" />
        {/* <Card /> */}
        <Input />
      </div>
    </div>
  );
}

export default App;
