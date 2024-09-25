import React, { useState } from "react";
import axios from "axios";
import "./TaskForm.css";
import Navbar from "../../Navbar";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://todobackendass.onrender.com/tasks",
        { title, description, status },
        {
          headers: { Authorization: token },
        }
      );

      if (response.status === 201) {
        alert("Task created successfully!");
        // Clear form fields after success
        setTitle("");
        setDescription("");
        setStatus("pending");
      }
    } catch (error) {
      alert(
        "Failed to create task: " + (error.response?.data || "Unknown error")
      );
      console.error("Failed to create task", error.response?.data);
    }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="heading">Create Task</h1>
      <input
        className="inputEl"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="input-Area"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
     
      <select className="select-input" value={status} onChange={(e) => setStatus(e.target.value)}>
        
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
        <option value="completed">Completed</option>
      </select>
      <button className="add-todo-button" type="submit">Create Task</button>
    </form>
    </>
    
  );
};

export default TaskForm;
