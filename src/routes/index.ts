import { Router } from 'express';

import { loginRouter } from './login.routes';
import { systems } from './systems.routes';
import { ticketsRouter } from './tickets.routes';
import { types } from './types.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/tickets', ticketsRouter);
router.use('/sign', loginRouter);
router.use('/systems', systems);
router.use('/types', types);

export { router };
