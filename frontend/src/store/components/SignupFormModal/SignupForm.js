import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("Email");
  const [username, setUsername] = useState("Username");
  const [password, setPassword] = useState("Password");
  const [confirmPassword, setConfirmPassword] = useState("Confirm Password");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <h4 id='login-or-signup'> Sign up</h4>
    <h2 id ='welcome'>Welcome to StarWarsbnb</h2>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
        <input className="user-auth-entry"
          type="text"
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="user-auth-entry"
          type="text"
          placeholder={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input className="user-auth-entry"
          type="password"
          placeholder={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="user-auth-entry"
          type="password"
          placeholder={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      <button className='user-auth-button' type="submit">Continue</button>
    </form>
    </>
  );
}

export default SignupFormPage;