import React from 'react';
import useUserData from '../../services/UserData/useUserData';
import { login } from '../../services/UserData/types';
import { Grid } from '@material-ui/core';
// import targets from '../../targets.json'

const Login = () => {

  // eslint-disable-next-line no-unused-vars
  const [userData, userDataDispatch] = useUserData();

  const handleSubmit = (e) => {

    // TODO: We should validate client-side for a valid email, and for both
    // email and password being entered at all, before sending to the server

    e.preventDefault();

    /* TODO: Only dispatch login after successful API response,
    and use response body instead hard-coded values

    The endpoint is `${targets[process.env.REACT_APP_TARGET].url}/login`

    A mock handler will respond appropriately if server started in mock mode,
    i.e. "yarn run start-mock"
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
