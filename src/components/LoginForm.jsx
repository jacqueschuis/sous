import { useState } from "react";

import { app } from "../libs/firebase-config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );
        return navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        const errorCode = err.code;
        const errorMessage = err.message;
      });
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="p-12 shadow-2xl rounded-2xl max-w-[500px] flex flex-col gap-10"
    >
      <h1 className="text-xl font-bold">Sign In</h1>
      <div className="flex flex-col">
        <label htmlFor="email" className="hidden">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-4 rounded-lg w-full p-2"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="hidden">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-4 rounded-lg w-full p-2"
          placeholder="Password"
        />
      </div>
      <button className="font-bold bg-slate-500 p-2 rounded-xl text-white tracking-wider">
        Login
      </button>
    </form>
  );
};

export default RegisterForm;
