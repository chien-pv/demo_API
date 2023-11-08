import logo from "./logo.svg";
import "./App.css";
import ListTodos from "./components/list_todos";

function App() {
  return (
    <div className="container">
      <h1>Todos Management</h1>
      <div className="row">
        <div className="col-7"></div>
        <div className="col-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search..."
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-outline-success">
        Create
      </button>

      <ListTodos />
    </div>
  );
}

export default App;
