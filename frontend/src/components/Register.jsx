import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import "./styles.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        { email, password },
        { withCredentials: true }
      );
      alert(res.data.message);
      login(); // mark as authenticated
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
      console.log(err);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <input
        className="auth-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="auth-input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-btn" onClick={handleRegister}>Sign Up</button>
    </div>
  );
}

export default Register;
