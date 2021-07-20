import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllUsersUseCase } from './FindAllUsersUseCase';

class FindAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllUsersUseCase = container.resolve(FindAllUsersUseCase);
    const all = await findAllUsersUseCase.execute();

    return response.json(all);
  }
}

export { FindAllUsersController };
