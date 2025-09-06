import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        { email, password },
        { withCredentials: true }
      );
      alert(res.data.message);
      login(); // update context + localStorage
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.data?.error === "Invalid credentials") {
        alert("No account found. Redirecting to register...");
        setTimeout(() => navigate("/register"), 1000);
      } else {
        alert(err.response?.data?.error || "Login failed");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
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
      <button className="auth-btn" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
