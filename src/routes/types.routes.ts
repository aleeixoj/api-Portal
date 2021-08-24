import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateTypesController } from '../modules/types/useCases/createTypes/CreateTypesController';
import { FindAllTypesController } from '../modules/types/useCases/findAllTypes/FindAllTypesController';

const createTypesController = new CreateTypesController();
const findAllTypesController = new FindAllTypesController();

const types = Router();

types.use(ensureAuthenticated);

types.post('/', createTypesController.handle);
types.get('/', findAllTypesController.handle);

export { types };
