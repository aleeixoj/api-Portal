import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindOpenResetsUseCase } from './FindOpenResetsUseCase';

class FindOpenResetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findOpenResetsUseCase = container.resolve(FindOpenResetsUseCase);
    const all = await findOpenResetsUseCase.execute();

    return response.json(all);
  }
}

export { FindOpenResetsController };
