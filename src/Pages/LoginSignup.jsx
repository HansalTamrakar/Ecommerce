import React, { useRef } from "react";
import "./CSS/loginsignup.css";
import { ValidateEmail } from "../utils/Validation";
import { ValidateName } from "../utils/Validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ValidatePassword } from "../utils/Validation";
import { useNavigate } from "react-router-dom";
function LoginSignup() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const auth = getAuth();
  const Navigate = useNavigate();

  const SignUp = () => {
    createUserWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        Navigate("/shop");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        // ..
      });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input ref={name} type="text" placeholder="Your Name" />
          <input ref={email} type="email" placeholder="Your Email Address" />
          <input ref={password} type="password" placeholder="Your Password" />
        </div>
        <button
          onClick={() => {
            SignUp();
          }}
        >
          Continue
        </button>
        <p className="loginsignup-login">
          Already have an account?<span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing the terms of use and policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
