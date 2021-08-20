import { Router } from 'express';

import { CreateTypesController } from '../modules/types/useCases/createTypes/CreateTypesController';
import { FindAllTypesController } from '../modules/types/useCases/findAllTypes/FindAllTypesController';

const createTypesController = new CreateTypesController();
const findAllTypesController = new FindAllTypesController();

const types = Router();

types.post('/', createTypesController.handle);
types.get('/', findAllTypesController.handle);

export { types };
