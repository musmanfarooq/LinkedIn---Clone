import React, { useState } from "react";
import { auth, db } from "../firebase";
import "./LoginPage.css";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [profilepic, setprofilepic] = useState("");
  const dispatch = useDispatch();

  function loginintoApp(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            profilepic: profilepic,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
    setpassword("");
    setemail("");
  }

  function register(e) {
    e.preventDefault();
    if (!name) {
      return alert("Please Enter your Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection("user").add({
          name: name,
          email: email,
          password: password,
          photoUrl: profilepic,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .catch((error) => {
        alert(error.message);
      });

    setname("");
    setpassword("");
    setemail("");
    setprofilepic("");
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
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Full Name (Required)"
              type="name"
            />
            <input
              value={profilepic}
              onChange={(e) => setprofilepic(e.target.value)}
              placeholder="Profile Pic URL"
              type="text"
            />
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
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
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <input
                value={email}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
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
