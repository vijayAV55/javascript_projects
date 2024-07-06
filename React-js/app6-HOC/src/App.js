import "./App.css";
import ClickCounter from "./HOC_Components/ClickCounter";
import HoverCounter from "./HOC_Components/HoverCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="Context_API">Context-API</h1>
      </header>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
