import React, { useState } from "react";

import "./entry.style.css";

import { LoginForm } from "../../Components/Login/Login.comp";
import { ResetPassword } from "../../Components/Password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill up all the form");
    }

    //TODO call api to submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter the email");
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = frmType =>{
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="form-box mt-4 p-5 bg-light text-black rounded">
        {frmLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher = {formSwitcher}
            email={email}
            pass={password}
          />
        )}

        {frmLoad === "reset" && (<ResetPassword
          handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher = {formSwitcher}
          email={email}
        />)}

      </div>
    </div>
  );
};
