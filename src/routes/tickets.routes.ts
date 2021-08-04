import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from '../config/multer';
import { AssignTicketToUserController } from '../modules/tickets/useCases/assignTicketToUser/AssignTicketToUserController';
import { CreateTicketController } from '../modules/tickets/useCases/createTicket/CreateTicketController';
import { FindAllResetsController } from '../modules/tickets/useCases/findAllResets/FindAllResetsController';
import { FindAllTicketsController } from '../modules/tickets/useCases/findAllTickets/FindAllTicketsController';
import { FindOpenResetsController } from '../modules/tickets/useCases/findOpenResets/FindOpenResetsController';
import { FindOpenTicketsController } from '../modules/tickets/useCases/findOpenTickets/FindOpenTicketsController';
import { FindTicketByNChamadoController } from '../modules/tickets/useCases/findTicketByNChamado/FindTicketByNChamadoController';
import { FindTicketsAssignedController } from '../modules/tickets/useCases/findTicketsAssigned/FindTicketsAssignedController';
import { RouteTicketToUserController } from '../modules/tickets/useCases/routeTicketToUser/RouteTicketToUserController';
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

const upload = multer(multerConfig);

ticketsRouter.post('/', upload.single('file'), createTicketController.handle);
ticketsRouter.patch('/assign', assignTicketToUserController.handle);
ticketsRouter.get('/', findAllTicketsController.handle);
ticketsRouter.get('/assigned', findTicketsAssignedController.handle);
ticketsRouter.get('/open', findOpenTicketsController.handle);
ticketsRouter.patch('/route', routeTicketToUserController.handle);
ticketsRouter.put(
  '/update',
  upload.single('file'),
  updateTicketController.handle
);
ticketsRouter.get('/resets', findAllResetsController.handle);
ticketsRouter.get('/resets/open', findOpenResetsController.handle);
ticketsRouter.get('/search/:nchamado', findTicketByNChamadoController.handle);

export { ticketsRouter };
