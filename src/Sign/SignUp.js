import { useState, React } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, SetPass] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(auth => {
        if (auth) {
          console.log(auth);
          alert("user created successfully");
        }
        navigate("/");
      })
      .catch(err => {
        alert(err);
      });
  };
  return (
    <div className="signup-card">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className="logo"
        />
      </Link>
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={e => SetPass(e.target.value)}
        />
        <button className="signup" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
