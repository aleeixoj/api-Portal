import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSystemController } from '../modules/systems/useCases/createSystem/CreateSystemController';
import { FindAllSystemsController } from '../modules/systems/useCases/findAllSystems/FindAllSystemsController';

const createSystemController = new CreateSystemController();
const findAllSystemsController = new FindAllSystemsController();

const systems = Router();

systems.use(ensureAuthenticated);

systems.post('/', createSystemController.handle);
systems.get('/', findAllSystemsController.handle);

export { systems };
