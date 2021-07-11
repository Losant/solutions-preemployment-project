import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNavigation from './components/TopNavigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import useUserData from './services/UserData/useUserData';

const App = () => {

  const [userData] = useUserData();

  if (!userData.isLoggedIn) {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <div className="App">
      <TopNavigation />
      <BrowserRouter>
        <Switch>
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
