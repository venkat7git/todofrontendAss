import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const onClickLogOut = ()=>{
    navigate('/login')
  }
  return (
    <>
    <h1 className="todo-heading">Todo App</h1>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        
        <li>
          <Link to="/newtask">New Task</Link>
        </li>
      </ul>
      <button onClick={onClickLogOut} className="logout-btn">Logout</button>
    </nav>
      
    </>
    
  );
};

export default Navbar;
