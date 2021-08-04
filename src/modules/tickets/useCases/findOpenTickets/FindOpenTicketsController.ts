import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindOpenTicketsUseCase } from './FindOpenTicketsUseCase';

class FindOpenTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findOpenTicketsUseCase = container.resolve(FindOpenTicketsUseCase);
    const all = await findOpenTicketsUseCase.execute();

    return response.json(all);
  }
}

export { FindOpenTicketsController };
