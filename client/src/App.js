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
import SignUp from "./components/auth/SignUp"
import Login from "./components/auth/Login"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return(
    <>
    <Router>
    <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/create-company" element={<CreateCompany/>}/> 
    <Route path="/get-company" element={<GetCompany/>}/>
    <Route path="/update-company" element={<UpdateCompany/>}/>
    <Route path="/list-company" element={<GenerateListView/>}/>
    <Route path="/add-user" element={<AddUser/>}/>
    <Route path="/remove-user" element={<RemoveUser/>}/>
    <Route path="/delete-company" element={<DeleteCompany/>}/>
    <Route path="/list-user" element={<GenerateUserListView/>}/>
    <Route path="/get-user" element={<GetUser/>}/>
    <Route path="/update-user" element={<UpdateUser/>}/>
    <Route path="/migrate" element={<Migrate/>}/>
    </Routes>
    </Router> 
    </>
  );
}

export default App;
