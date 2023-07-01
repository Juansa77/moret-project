import "./App.css";
import MainElement from "./components/MainElement";
import HeaderTop from "./components/HeaderTop";
import NavBar from "./components/NavBar/NavBar";
import GigCard from "./components/GigCard";
import CategorySplitter from "./components/CategorySplitter";

function App() {
  const gigCards = [];

  // Agrega el componente GigCard al array seis veces
  for (let i = 0; i < 6; i++) {
    gigCards.push(
      <GigCard
        key={i} // Agrega una clave única para cada componente en el bucle
        title={`CONCIERTO EN HUELVA ${i + 1}`}
        date="27 de agosto"
        place="Sala X"
        textButton="Entradas"
      />
    );
  }
  return (
    <div className="App">
      <NavBar />
      <HeaderTop
        backImg="cristian-live1.jpg"
        title="Conciertos de verano"
        description="Entérate de lo último del Moret"
        textButton="Haz click"
      />
      <CategorySplitter title="PRÓXIMOS CONCIERTOS" />
      <div className="gig-container">{gigCards}</div>

      <MainElement
        backImg="cdm-sit.jpg"
        title="Conciertos de verano"
        description="Entérate de lo último del Moret"
        textButton="Haz click"
      />
    </div>
  );
}

export default App;
