import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/user/useCases/createUser/CreateUserController';
import { FindAllUsersController } from '../modules/user/useCases/findAllUsers/FindAllUsersController';
import { FindUserByGroupController } from '../modules/user/useCases/findUserByGroup/FindUserByGroupController';
import { FindUserByIdController } from '../modules/user/useCases/findUserById/FindUserByIdController';
import { FindUserByMatController } from '../modules/user/useCases/findUserByMat/FindUserByMatController';

const userRouter = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();
const findAllUserByGroupController = new FindUserByGroupController();
const findUserByMatController = new FindUserByMatController();
const findUserByIdController = new FindUserByIdController();

userRouter.use(ensureAuthenticated);

userRouter.post('/', createUserController.handle);

userRouter.get('/', findAllUsersController.handle);

userRouter.get('/group', findAllUserByGroupController.handle);

userRouter.get('/matricula', findUserByMatController.handle);

userRouter.get('/:id', findUserByIdController.handle);

export { userRouter };
