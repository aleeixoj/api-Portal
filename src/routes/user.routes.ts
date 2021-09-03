import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/user/useCases/createUser/CreateUserController';
import { FindAllUsersController } from '../modules/user/useCases/findAllUsers/FindAllUsersController';
import { FindUserByGroupController } from '../modules/user/useCases/findUserByGroup/FindUserByGroupController';
import { FindUserByIdController } from '../modules/user/useCases/findUserById/FindUserByIdController';
import { FindUserByMatController } from '../modules/user/useCases/findUserByMat/FindUserByMatController';
import { UpdateUserController } from '../modules/user/useCases/updateUser/UpdateUserController';
import { ListPermissionsController } from '../modules/userPermission/useCases/ListPermissionsController';

const userRouter = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();
const findAllUserByGroupController = new FindUserByGroupController();
const findUserByMatController = new FindUserByMatController();
const findUserByIdController = new FindUserByIdController();
const listPermissionsController = new ListPermissionsController();
const updateUserController = new UpdateUserController();

userRouter.use(ensureAuthenticated);

userRouter.post('/', createUserController.handle);

userRouter.get('/', findAllUsersController.handle);

userRouter.get('/group', findAllUserByGroupController.handle);

userRouter.get('/matricula', findUserByMatController.handle);

userRouter.get('/permissions', listPermissionsController.handle);

userRouter.get('/:id', findUserByIdController.handle);

userRouter.patch('/update', updateUserController.handle);

export { userRouter };
