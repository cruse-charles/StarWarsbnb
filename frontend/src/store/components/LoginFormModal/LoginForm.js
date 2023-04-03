import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState(" Username or Email");
  const [password, setPassword] = useState(" Password");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <>
    <h4>Log in or sign up</h4>
    <h2>Welcome to Starwarsbnb</h2>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {/* <label> */}
        <input className='user-auth-button'
          type="text"
          placeholder={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      {/* </label> */}
      {/* <br></br> */}
      {/* <label> */}
        <input className='user-auth-button'
          type="password"
          placeholder={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      {/* </label> */}
      <br></br>
      <button className='user-auth-button' id='continue-button' type="submit">Continue</button>
    </form>
    </>
  );
}

export default LoginForm;