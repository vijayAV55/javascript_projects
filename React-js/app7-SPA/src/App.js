import "./App.css";
import Main_Lazy from "./Lazy-loading/Main_Lazy";
import Main_Dashboard from "./Nexted-Routing/Dash-Board/Main_Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page">Single page Application</h1>
      </header>

      {/* <Main_Lazy /> */}

      <br />
      <hr />
      <Main_Dashboard />
    </div>
  );
}

export default App;
