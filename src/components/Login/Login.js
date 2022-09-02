/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import useUserData from '../../services/UserData/useUserData';
import { login } from '../../services/UserData/types';
import { Grid } from '@material-ui/core';
import targets from '../../targets.json';

const Login = () => {


  const [userData, userDataDispatch] = useUserData(); // used to notify the rest of the application of success
  const [email, setEmail] = useState(''); // email that the user types in the form
  const [password, setPassword] = useState(''); // password that the user types in the form

  const handleSubmit = (e) => {

    e.preventDefault();

    /* TODO:

    * Make an AJAX request using a method or library of your choice.
    * Only send the login dispatch (below) after a successful API response.
    * Have extra time? Add an enhancement:
      * Use the response body instead of the hard-coded values for accessRules.
      * Validate the input before sending
      * Show the user an error if their password is wrong
      * etc.

    Notes:
    * The endpoint is `${targets[process.env.REACT_APP_TARGET].url}/login`
    * An existing mock server will respond appropriately if "yarn run start-mock" is used
    * Valid user: "test.user@example.com" / "qwerty123",

    Request: POST /login  Body: { "email": "...", "password": "..."}
    Response:
      Status code: 400 if missing email or password, 401 if invalid email password, 200 if valid
      Body: { "id": "...", "token": "...", "accessRules": { "static": [...], "dynamic": [...]} }
    */

    // send only if 200
    userDataDispatch({
      type: login,
      payload: {
        email: 'user@example.com',
        accessRules: { static: [], dynamic: [] }
      }
    });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={8}>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email} onChange={handleChangeEmail} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={handleChangePassword} />
          </div>
          <div>
            <input type="submit" onClick={handleSubmit} />
          </div>
        </form>
      </Grid>

    </Grid>

  );
};

export default Login;
