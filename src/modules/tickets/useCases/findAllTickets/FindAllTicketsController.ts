import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllTicketsUseCase } from './FindAllTicketsUseCase';

class FindAllTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllTicketsUseCase = container.resolve(FindAllTicketsUseCase);
    const all = await findAllTicketsUseCase.execute();

    return response.json(all);
  }
}

export { FindAllTicketsController };
