import { Router } from 'express';

import { connectToAd, IRequest } from '../middlewares/UserLogin';
import { UserLoginController } from '../modules/userLogin/useCases/userLogin/UserLoginController';
import { UserLogoutController } from '../modules/userLogin/useCases/userLogout/UserLogoutController';

const loginRouter = Router();

const userLoginController = new UserLoginController();
const userLogoutController = new UserLogoutController();

loginRouter.post('/in', connectToAd, userLoginController.handle);
loginRouter.post('/out', userLogoutController.handle);

export { loginRouter };
