import React from 'react';
import useUserData from '../../services/UserData/useUserData';
import { login } from '../../services/UserData/types';
import { Grid } from '@material-ui/core';
// import targets from '../../targets.json'

const Login = () => {

  // eslint-disable-next-line no-unused-vars
  const [userData, userDataDispatch] = useUserData();

  const handleSubmit = (e) => {

    e.preventDefault();

    /* TODO: Only log the user in after a successful API response,
    and use the response body instead of the hard-coded values

    The endpoint is `${targets[process.env.REACT_APP_TARGET].url}/login`

    An existing mock API handler will respond appropriately to this endpoint
    if the server is started in mock mode,
    i.e. "yarn run start-mock"

    Request: POST /login  Body: { "email": "...", "password": "..."}
    Response:
      Status code: 400 if missing email or password, 401 if invalid email password, 200 if valid
      Body: { "id": "...", "token": "...", "accessRules": { "static": [...], "dynamic": [...]} }
    */

    userDataDispatch({
      type: login,
      payload: {
        email: 'user@example.com',
        accessRules: { static: [], dynamic: [] }
      }
    });
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
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
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
