import "./App.css";
import Main from "./Context-API/Main";
import ClickCounter from "./HOC_Components/ClickCounter";
import HoverCounter from "./HOC_Components/HoverCounter";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <ClickCounter />
      <br></br>
      <HoverCounter />
    </div>
  );
}

export default App;
