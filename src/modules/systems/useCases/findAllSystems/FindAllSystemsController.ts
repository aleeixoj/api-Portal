import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllSystemsUseCase } from './FindAllSystemsUseCase';

class FindAllSystemsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllSystemsUseCase = container.resolve(FindAllSystemsUseCase);

    const systems = await findAllSystemsUseCase.execute();
    return response.status(200).json({ systems });
  }
}

export { FindAllSystemsController };
