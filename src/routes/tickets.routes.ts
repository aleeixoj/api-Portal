import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from '../config/multer';
import { AssignTicketToUserController } from '../modules/tickets/useCases/assignTicketToUser/AssignTicketToUserController';
import { CloseTicketsController } from '../modules/tickets/useCases/closeTickets/CloseTicketsController';
import { CreateTicketController } from '../modules/tickets/useCases/createTicket/CreateTicketController';
import { FindAllResetsController } from '../modules/tickets/useCases/findAllResets/FindAllResetsController';
import { FindAllTicketsController } from '../modules/tickets/useCases/findAllTickets/FindAllTicketsController';
import { RouteTicketToUserController } from '../modules/tickets/useCases/routeTicketToUser/RouteTicketToUserController';

const ticketsRouter = Router();

const createTicketController = new CreateTicketController();
const assignTicketToUserController = new AssignTicketToUserController();
const routeTicketToUserController = new RouteTicketToUserController();
const closeTicketsController = new CloseTicketsController();
const findAllTicketsController = new FindAllTicketsController();
const findAllResetsController = new FindAllResetsController();

const upload = multer(multerConfig);

ticketsRouter.post('/', upload.single('file'), createTicketController.handle);
ticketsRouter.patch('/', assignTicketToUserController.handle);
ticketsRouter.get('/', findAllTicketsController.handle);
ticketsRouter.patch('/route', routeTicketToUserController.handle);
ticketsRouter.put(
  '/close',
  upload.single('file'),
  closeTicketsController.handle
);
ticketsRouter.get('/resets', findAllResetsController.handle);

export { ticketsRouter };
