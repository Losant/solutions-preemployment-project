import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import targets from '../targets.json';


const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    background: 'red',
    color: 'white',
    fontSize: 'small',
    padding: '.25em',
    opacity: 0.6
  }
}));


const MockHandlersDisplay = () => {

  const classes = useStyles();

  const developmentURL = targets.development.url;
  const mockAPI = process.env.REACT_APP_MOCK_API;

  if (mockAPI) {
    return <div className={classes.root}>Using mock handlers for {developmentURL}</div>;
  }

  return null;
};

export default MockHandlersDisplay;
