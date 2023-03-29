import React from "react";
import Button from "./Button";
import styled from "./Register.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { BsLockFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className={styled.container}>
      <h1> Welcome to Registration Page </h1>
        
        <div className={styled.first}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/free-registration-desk-1886554-1598085.png"
            alt="img_not_found"
          />
        </div>

      
      </div>
    </>
  );
};
export default Register;
