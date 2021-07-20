import { Router } from 'express';

import { loginRouter } from './login.routes';
import { ticketsRouter } from './tickets.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/tickets', ticketsRouter);
router.use('/signin', loginRouter);

export { router };
