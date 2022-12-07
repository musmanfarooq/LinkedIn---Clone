import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./LoginPage.css";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function loginintoApp(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        console.log("login");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function register(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        console.log("User have Signin");
        alert("Account Created, Signing you in");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="login">
      <img
        src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
        alt="LinkedIn Logo"
      />
      {isRegister ? (
        <div className="signupcard">
          <form>
            <input placeholder="Full Name" type="name" />
            <input placeholder="Profile Pic URL" type="text" />
            <input placeholder="Email" type="email" ref={emailRef} />
            <input placeholder="Password" type="password" ref={passwordRef} />
            <button type="submit" onClick={register}>
              Register
            </button>
          </form>
          <p>
            Already a member?{""}
            <span
              className="login__register"
              onClick={(e) => setIsRegister(false)}
            >
              Sigin in
            </span>
          </p>
        </div>
      ) : (
        <div>
          <div className="logincard">
            <form>
              <input placeholder="Email" type="email" ref={emailRef} />
              <input placeholder="Password" type="password" ref={passwordRef} />
              <button type="submit" onClick={loginintoApp}>
                Sign in
              </button>
            </form>
            <p>
              Not a memeber?{""}
              <span
                className="login__register"
                onClick={(e) => setIsRegister(true)}
              >
                Register Now
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
