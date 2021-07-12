import { rest } from 'msw';
import targets from '../targets.json';
import sampleUsers from './mockData/sampleUsers.json';

const urlBase = targets[process.env.REACT_APP_TARGET].url;

export const handlers = [
  rest.post(`${urlBase}/login`, (req, res, ctx) => {
    const {
      email, password
    } = req.body;
    if (!(email && password)) {
      return res(ctx.status(400), ctx.json({
        error: 'Please submit both a username and password'
      }));
    }

    const userMatch = sampleUsers.find( (user) => user.email.trim().toLowerCase() === email.trim().toLowerCase()
        && user.password === password );

    if (!userMatch) {
      return res(ctx.status(401), ctx.json({
        error: 'Invalid combination of username and password'
      }));
    }

    return res(ctx.status(200), ctx.json({
      id: userMatch.id,
      token: userMatch.token,
      accessRules: userMatch.accessRules
    }));
  })
];
