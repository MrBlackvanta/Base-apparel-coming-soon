import { useState } from "react";
import errorImage from "../images/icon-error.svg";
import "./Details.scss";

export default function Details(props) {
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const emailValid = email.includes("@");
  const hasError = !emailValid && emailIsTouched;

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (hasError) {
      return;
    }

    setEmail("");
    setEmailIsTouched(false);
  };

  const formClasses = hasError ? "form invalid" : "form";
  const errorClasses = hasError ? "details-error shown" : "details-error";

  return (
    <div className="details">
      <div className="details-content">
        <img
          src={props.logo}
          alt="Base Apparel Logo"
          className="details-logo"
        />
        <h1 className="details-heading">
          <span className="details-heading-1">{props.heading1}</span>
          <br />
          <span className="details-heading-2">{props.heading2}</span>
        </h1>
        <p className="details-description">{props.description}</p>
        <form className={formClasses} onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            value={email}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          {hasError && (
            <p className={errorClasses}>Please provide a valid email</p>
          )}
          {hasError && (
            <img src={errorImage} alt="error sign" className="error-icon" />
          )}
          <button className="form-btn">
            <img src={props.arrow} alt="arrow icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
