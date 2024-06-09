import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup, signupError, user, clearErrors } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password, email);
    if (user) {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Sign Up</h1>
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        {signupError && <div className={styles.error}>{signupError}</div>}
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <div className={styles.linkContainer}>
          <span>Already have an account? </span>
          <Link
            to="/login"
            className={styles.link}
            onClick={() => clearErrors()}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
