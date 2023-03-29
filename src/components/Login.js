import React from "react";
import Button from "./Button";
import styled from "./Register.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { BsLockFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className={styled.container}>
      <h1> Welcome to Login Page </h1>
        <div className={styled.first}>
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=2000"
            alt="img_not_found"
          />
        </div>

       
      </div>
    </>
  );
};
export default Login;
