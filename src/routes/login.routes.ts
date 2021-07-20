import { Router } from 'express';

import { connectToAd, IRequest } from '../middlewares/UserLogin';
import { UserLoginController } from '../modules/userLogin/useCases/userLogin/UserLoginController';

const loginRouter = Router();

const userLoginController = new UserLoginController();

loginRouter.post('/', connectToAd, userLoginController.handle);

export { loginRouter };
