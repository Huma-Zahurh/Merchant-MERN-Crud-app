import Form from "./Components/Form";
import "./App.css";
import Merchants from "./Components/Merchants";

function App() {
  return (
    <>
      <div className="py-3 container-fluid">
        <h3 className="mx-3 main-heading">Merchant Crud App</h3>
        <div className="row">
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-8">
            <Merchants />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
