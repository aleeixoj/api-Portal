import { Router } from 'express';

import { CreateUserController } from '../modules/user/useCases/createUser/CreateUserController';
import { FindAllUsersController } from '../modules/user/useCases/findAllUsers/FindAllUsersController';
import { FindUserByGroupController } from '../modules/user/useCases/findUserByGroup/FindUserByGroupController';
import { FindUserByMatController } from '../modules/user/useCases/findUserByMat/FindUserByMatController';

const userRouter = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();
const findAllUserByGroupController = new FindUserByGroupController();
const findUserByMatController = new FindUserByMatController();

userRouter.post('/', createUserController.handle);

userRouter.get('/', findAllUsersController.handle);

userRouter.get('/group', findAllUserByGroupController.handle);

userRouter.get('/matricula', findUserByMatController.handle);

export { userRouter };
