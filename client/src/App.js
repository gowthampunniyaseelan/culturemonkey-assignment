import "./App.css"
import CreateCompany from "./components/company/CreateCompany"
import GetCompany from "./components/company/GetCompany";
import GenerateListView from "./components/company/generateListView";
import UpdateCompany from "./components/company/UpdateCompany";
import AddUser from "./components/company/AddUser";
import RemoveUser from "./components/company/RemoveUser";
import DeleteCompany from "./components/company/DeleteCompany";
function App() {
  return(
    <>
    <CreateCompany/>
    <GetCompany/>
    <UpdateCompany/>
    <GenerateListView/>
    <AddUser/>
    <RemoveUser/>
    <DeleteCompany/>
    </>
 
  );
}

export default App;
