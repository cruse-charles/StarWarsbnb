import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { menuContext } from "../Navigation/index";
import { useContext } from "react";

function LoginForm({onSubmit}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState(" Username or Email");
  const [password, setPassword] = useState(" Password");
  const [errors, setErrors] = useState([]);
  const {menuState, setMenuState} = useContext(menuContext)

  //Dispatching input data for login, removing modal, and sending errors if any
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .then(() => onSubmit)
    .then(() => {setMenuState(false)})
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

  
  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({credential: 'demo@user.io', password: 'password'}))
    //Pass this in with creditial:, password: since session.actions wants an object. 
    .then(onSubmit)
    .then(() => {setMenuState(false)})
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

  }

  return (
    <>
    <h4 id='login-or-signup'>Log in</h4>
    <h2 id='welcome'>Welcome to Starwarsbnb</h2>

    {/* Submitting credentials */}
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
        <input className='user-auth-entry'
          type="text"
          placeholder={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input className='user-auth-entry'
          type="password"
          placeholder={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <br></br>
      <button className='user-auth-button' type="submit">Continue</button>
    </form>

    {/* Button for links to other sites */}
      <button onClick={handleDemo} className='demo-button' type='submit'>Demo Log in</button>
      <div id='or-container'><p>          </p>or<p>        </p></div>
      <a id='github-link-container'href='https://github.com/cruse-charles/StarWarsbnb'><div id='github-button'>GitHub</div></a>
      <a id='linkedin-link-container'href='https://www.linkedin.com/in/charles-cruse-2ba72ab6/'><div id='linkedin-button'>LinkedIn</div></a>
    </>
  );
}

export default LoginForm;