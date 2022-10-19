import "./App.css"
import CreateCompany  from "./components/CreateCompany";
import GetCompany from "./components/GetCompany";
import GenerateListView from "./components/generateListView";
import UpdateCompany from "./components/UpdateCompany";
import AddUser from "./components/AddUser";
function App() {
  return(
    <>
    <CreateCompany/>
    <GetCompany/>
    <UpdateCompany/>
    <GenerateListView/>
    <AddUser/>
    </>
 
  );
}

export default App;
