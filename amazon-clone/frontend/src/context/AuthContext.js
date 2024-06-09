// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "./axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const clearErrors = () => {
    setLoginError("");
    setSignupError("");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post("/auth/login", { username, password });
      const userData = { token: response.data.token, username };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      clearErrors();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setLoginError(error.response.data.error);
      } else {
        setLoginError("Invalid username or password");
      }
    }
  };

  const signup = async (username, password, email) => {
    try {
      const response = await axios.post("/auth/signup", {
        username,
        password,
        email,
      });
      const userData = { token: response.data.token, username };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      clearErrors();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setSignupError(error.response.data.error);
      } else {
        setSignupError("Signup failed");
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loginError,
        signupError,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
