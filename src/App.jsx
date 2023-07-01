import "./App.css";
import MainElement from "./components/MainElement";

function App() {
  return (
    <div className="App">
      <MainElement
        backImg="cdm-sit.jpg"
        title="Conciertos de verano"
        description="Entérate de lo último del Moret"
        textButton= "Haz click"
      />
    </div>
  );
}

export default App;
