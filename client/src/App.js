import "./App.css"
import CreateCompany from "./components/company/CreateCompany"
import GetCompany from "./components/company/GetCompany";
import GenerateListView from "./components/company/GenerateListView";
import UpdateCompany from "./components/company/UpdateCompany";
import AddUser from "./components/company/AddUser";
import RemoveUser from "./components/company/RemoveUser";
import DeleteCompany from "./components/company/DeleteCompany";
import GenerateUserListView from "./components/user/GenerateUserListView";
import GetUser from "./components/user/GetUser";
import UpdateUser from "./components/user/UpdateUser";
import Migrate from "./components/company/Migrate";
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
    <GenerateUserListView/>
    <GetUser/>
    <UpdateUser/>
    <Migrate/>
    </>
  );
}

export default App;
