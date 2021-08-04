import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllSystemsUseCase } from './FindAllSystemsUseCase';

class FindAllSystemsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllSystemsUseCase = container.resolve(FindAllSystemsUseCase);
    try {
      const systems = await findAllSystemsUseCase.execute();
      return response.status(200).json({ systems });
    } catch (error) {
      return response.status(500).json({ status_message: error.message });
    }
  }
}

export { FindAllSystemsController };
