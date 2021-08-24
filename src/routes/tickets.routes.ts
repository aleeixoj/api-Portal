import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from '../config/multer';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { AssignTicketToUserController } from '../modules/tickets/useCases/assignTicketToUser/AssignTicketToUserController';
import { CreateTicketController } from '../modules/tickets/useCases/createTicket/CreateTicketController';
import { FifteenDaysResetsController } from '../modules/tickets/useCases/fifteenDayResets/FifteenDayResetsController';
import { FifteenDaysTicketsController } from '../modules/tickets/useCases/fifteenDayTickets/FifteenDaysTicketsController';
import { FindAllResetsController } from '../modules/tickets/useCases/findAllResets/FindAllResetsController';
import { FindAllTicketsController } from '../modules/tickets/useCases/findAllTickets/FindAllTicketsController';
import { FindOpenResetsController } from '../modules/tickets/useCases/findOpenResets/FindOpenResetsController';
import { FindOpenTicketsController } from '../modules/tickets/useCases/findOpenTickets/FindOpenTicketsController';
import { FindTicketByNChamadoController } from '../modules/tickets/useCases/findTicketByNChamado/FindTicketByNChamadoController';
import { FindTicketsAssignedController } from '../modules/tickets/useCases/findTicketsAssigned/FindTicketsAssignedController';
import { RouteTicketToUserController } from '../modules/tickets/useCases/routeTicketToUser/RouteTicketToUserController';
import { SevenDayResetsController } from '../modules/tickets/useCases/sevenDayResets/SevenDayResetsController';
import { SevenDayTicketsController } from '../modules/tickets/useCases/sevenDayTickets/SevenDayTicketsController';
import { ThirtynDaysResetsController } from '../modules/tickets/useCases/thirtyDayResets/ThirtynDaysResetsController';
import { ThirtynDaysTicketsController } from '../modules/tickets/useCases/thirtyDayTickets/ThirtynDaysTicketsController';
import { UpdateTicketController } from '../modules/tickets/useCases/updateTicket/UpdateTicketController';

const ticketsRouter = Router();

const createTicketController = new CreateTicketController();
const assignTicketToUserController = new AssignTicketToUserController();
const routeTicketToUserController = new RouteTicketToUserController();
const updateTicketController = new UpdateTicketController();
const findAllTicketsController = new FindAllTicketsController();
const findAllResetsController = new FindAllResetsController();
const findTicketsAssignedController = new FindTicketsAssignedController();
const findOpenTicketsController = new FindOpenTicketsController();
const findOpenResetsController = new FindOpenResetsController();
const findTicketByNChamadoController = new FindTicketByNChamadoController();
const sevenDayTicketsController = new SevenDayTicketsController();
const fifteenDaysTicketsController = new FifteenDaysTicketsController();
const thirtynDaysTicketsController = new ThirtynDaysTicketsController();
const sevenDayResetsController = new SevenDayResetsController();
const fifteenResetsTicketsController = new FifteenDaysResetsController();
const thirtynDaysResetsController = new ThirtynDaysResetsController();

const upload = multer(multerConfig);

ticketsRouter.use(ensureAuthenticated);

ticketsRouter.post('/', upload.single('file'), createTicketController.handle);

ticketsRouter.patch('/assign', assignTicketToUserController.handle);
ticketsRouter.patch('/route', routeTicketToUserController.handle);
ticketsRouter.put(
  '/update',
  upload.single('file'),
  updateTicketController.handle
);

ticketsRouter.get('/', findAllTicketsController.handle);
ticketsRouter.get('/assigned', findTicketsAssignedController.handle);
ticketsRouter.get('/resets', findAllResetsController.handle);
ticketsRouter.get('/resets/open', findOpenResetsController.handle);
ticketsRouter.get('/search/:nchamado', findTicketByNChamadoController.handle);

ticketsRouter.get('/open', findOpenTicketsController.handle);
ticketsRouter.get('/open/seven', sevenDayTicketsController.handle);
ticketsRouter.get('/open/fifteen', fifteenDaysTicketsController.handle);
ticketsRouter.get('/open/thirty', thirtynDaysTicketsController.handle);

ticketsRouter.get('/open/resets/seven', sevenDayResetsController.handle);
ticketsRouter.get(
  '/open/resets/fifteen',
  fifteenResetsTicketsController.handle
);
ticketsRouter.get('/open/resets/thirty', thirtynDaysResetsController.handle);

export { ticketsRouter };
