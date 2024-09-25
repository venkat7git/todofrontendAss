

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import TaskList from "./components/Tasks/TaskList";
import TaskForm from "./components/Tasks/TaskForm";

import UpdateTask from "./UpdateTask";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/newtask" element={<TaskForm />} />
        <Route path="/updatetask/:id" element={<UpdateTask />} />
      </Routes>
    </Router>
  );
};

export default App;
