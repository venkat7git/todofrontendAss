import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://todobackendass.onrender.com/signup", {
        name,
        email,
        password,
      });
      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error.response?.data || error.message);
      alert("Signup failed: " + (error.response?.data || "Unknown error"));
    }
  };
  const onClickLogin = ()=>{
    navigate("/login")
  }

  return (
    <div className="main-container">
    <form onSubmit={handleSignup} className="form-container">
      <h1 className="heading">Signup</h1>
      <input
      className="inputEl"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
      className="inputEl"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
      className="inputEl"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="signup-button" type="submit">Signup</button>
      <p className="create-account-para">
          Already have an account
        </p>
      <button className="create-account-btn" type="button" onClick={onClickLogin}>Login</button>
    </form>
    </div>
  );
};

export default Signup;
