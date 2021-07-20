import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllResetsUseCase } from './FindAllResetsUseCase';

class FindAllResetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllResetsUseCase = container.resolve(FindAllResetsUseCase);
    const all = await findAllResetsUseCase.execute();

    return response.json(all);
  }
}

export { FindAllResetsController };
