import React, { useRef } from "react";
import "./CSS/loginsignup.css";
import { ValidateEmail } from "../utils/Validation";
import { ValidateName } from "../utils/Validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ValidatePassword } from "../utils/Validation";
function LoginSignup() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const auth = getAuth();

  const SignUp = () => {
    ValidateEmail(name?.current?.value);
    ValidateName(email?.current?.value);
    ValidatePassword(password?.current?.value);
    console.log(name?.current?.value);
    console.log(password?.current?.value);
    console.log(email?.current?.value);

    createUserWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
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
