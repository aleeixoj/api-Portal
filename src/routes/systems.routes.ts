import { Router } from 'express';

import { CreateSystemController } from '../modules/systems/useCases/createSystem/CreateSystemController';
import { FindAllSystemsController } from '../modules/systems/useCases/findAllSystems/FindAllSystemsController';

const createSystemController = new CreateSystemController();
const findAllSystemsController = new FindAllSystemsController();

const systems = Router();

systems.post('/', createSystemController.handle);
systems.get('/', findAllSystemsController.handle);

export { systems };
