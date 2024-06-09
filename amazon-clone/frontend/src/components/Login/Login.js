import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const { login, loginError, user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        {loginError && <div className={styles.error}>{loginError}</div>}
        <button type="submit" className={styles.button}>
          Login
        </button>
        <div className={styles.linkContainer}>
          <span>Don't have an account? </span>
          <Link to="/signup" className={styles.link}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
