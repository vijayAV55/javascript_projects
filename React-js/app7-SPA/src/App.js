import "./App.css";
import Main_Protector from "./Protector-Route/Main_Protector";
import User from "./Protector-Route/User";
import Main_Component from "./SPA-2/Main_Component";
import Main_Sap from "./Single-page-Application/Main_Sap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page">Single page Application</h1>
      </header>
      {/* <Main_Sap />
      <Main_Component /> */}
      <Main_Protector></Main_Protector>
    </div>
  );
}

export default App;
