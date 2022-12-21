import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Task from "./component/task/Task";
import User from "./component/user/User";
import About from "./component/about/About";
import Content from './component/content/Content';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>} />  
          {/* <Route path="home" element={<Home></Home>} /> */}
          <Route path="task" element={<Task></Task>} />
          <Route path="user" element={<User></User>} />
          <Route path="about" element={<About></About>}/>
          <Route path="content" element={<Content></Content>}/> 
        </Route>
        <Route path="/" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
