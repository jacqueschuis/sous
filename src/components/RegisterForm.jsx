import { useState } from "react";

import { app } from "../libs/firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
      });
  };

  return (
    <form
      onSubmit={handleRegister}
      className="p-12 shadow-2xl rounded-2xl max-w-[500px] flex flex-col gap-10"
    >
      <h1 className="text-xl font-bold">Register New Chef</h1>
      <div className="flex flex-col">
        <p>Name:</p>
        <div className="flex gap-3">
          <label htmlFor="first-name" className="hidden">
            First Name:
          </label>
          <input
            type="text"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-4 rounded-lg w-full p-2"
            placeholder="First"
          />
          <label htmlFor="last-name" className="hidden">
            Last Name:
          </label>
          <input
            type="text"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-4 rounded-lg w-full p-2"
            placeholder="Last"
          />
        </div>
      </div>
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
