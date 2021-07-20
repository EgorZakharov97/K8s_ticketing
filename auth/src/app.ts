import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routs/current-user';
import { signInRouter } from './routs/signin';
import { signOutRouter } from './routs/signout';
import { signUpRouter } from './routs/signup';

import { errorHandler } from './middleware/error-handler';
import { NotFoundError } from './errors/not-bound-error';

// check for env variables presence
if(!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined');

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
)

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.use(errorHandler);

app.all('*', () => {
    throw new NotFoundError();
});

export {app};
