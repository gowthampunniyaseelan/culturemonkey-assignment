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
// import Navbar from "./components/nav/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const temp = window.localStorage.getItem("emailId")
  return(
    <>
    <Router>
    <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/create-company" element={temp ? <CreateCompany/> : <Navigate to="/"/>}/> 
    <Route path="/get-company" element={temp ? <GetCompany/> : <Navigate to="/"/>}/>
    <Route path="/update-company" element={temp ? <UpdateCompany/> : <Navigate to="/"/>}/>
    <Route path="/list-company" element={temp ? <GenerateListView/>: <Navigate to="/"/>}/>
    <Route path="/add-user" element={temp ? <AddUser/> : <Navigate to="/"/>}/>
    <Route path="/remove-user" element={temp ? <RemoveUser/>: <Navigate to="/"/>}/>
    <Route path="/delete-company" element={temp ?<DeleteCompany/>: <Navigate to="/"/>}/>
    <Route path="/list-user" element={temp ?<GenerateUserListView/>: <Navigate to="/"/>}/>
    <Route path="/get-user" element={temp ? <GetUser/>: <Navigate to="/"/>}/>
    <Route path="/update-user" element={temp ? <UpdateUser/>: <Navigate to="/"/>}/>
    <Route path="/migrate" element={temp ? <Migrate/>: <Navigate to="/"/> }/>
    </Routes>
    </Router> 
    </>
  );
}

export default App;
