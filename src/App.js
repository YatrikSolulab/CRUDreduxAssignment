import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import DisplayTable from "./components/DisplayTable";

function App() {
  return (
    <div className="container my-5 d-flex flex-column">
      <Form />
      <DisplayTable />
    </div>
  );
}

export default App;
