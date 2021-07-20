import express, { Request, Response } from 'express'
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { User } from '../models/user';
import { Password } from '../lib/passwordManager';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signin',
[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must apply a password')
],
validateRequest,
async (req: Request, res: Response) => {
    
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user) throw new BadRequestError('Invalid credentials');

    const validPassword = await Password.compare(user.password, password);
    if(!validPassword) throw new BadRequestError('Invalid credentials');

    const userJWT = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!);

    req.session = { jwt: userJWT }

    res.status(201).send(user);
});

export { router as signInRouter };
