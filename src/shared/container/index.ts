import { container } from 'tsyringe';


import { ResetRepository } from '../../modules/tickets/repositories/implementations/ResetRespository';
import { TicketsRepository } from '../../modules/tickets/repositories/implementations/TicketsRepository';
import { IResetRepository } from '../../modules/tickets/repositories/IResetRepository';
import { ITicketsRepository } from '../../modules/tickets/repositories/ITicketsRepository';
import { UserRepository } from '../../modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';
import { UserLoginRepository } from '../../modules/userLogin/repositories/implementations/UserLoginRepository';
import { IUserLoginRepository } from '../../modules/userLogin/repositories/IUserLoginRepository';
import { UserPermissionRepository } from '../../modules/userPermission/repositories/implementations/PermissionRepository';
import { SuperPermissionRepository } from '../../modules/userPermission/repositories/implementations/SuperRepository';
import { IUserPermissionRepository } from '../../modules/userPermission/repositories/IPermissionRepository';
import { ISuperPermissionRepository } from '../../modules/userPermission/repositories/ISuperRepository';
import { UserTicketsRepository } from '../../modules/userTickets/repositories/implementations/UserTicketRepository';
import { IUserTicketsRepository } from '../../modules/userTickets/repositories/IUserTicketRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IResetRepository>(
  'ResetRepository',
  ResetRepository
);

container.registerSingleton<ITicketsRepository>(
  'TicketsRepository',
  TicketsRepository
);

container.registerSingleton<IUserLoginRepository>(
  'UserLoginRepository',
  UserLoginRepository
);

container.registerSingleton<ISuperPermissionRepository>(
  'SuperPermissionRepository',
  SuperPermissionRepository
);

container.registerSingleton<IUserPermissionRepository>(
  'UserPermissionRepository',
  UserPermissionRepository
);

container.registerSingleton<IUserTicketsRepository>(
  'UserTicketsRepository',
  UserTicketsRepository
);


