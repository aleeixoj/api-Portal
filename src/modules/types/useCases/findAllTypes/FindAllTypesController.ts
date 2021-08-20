import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllTypesUseCase } from './FindAllTypesUseCase';

class FindAllTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllTypesUseCase = container.resolve(FindAllTypesUseCase);
    try {
      const types = await findAllTypesUseCase.execute();
      return response.status(200).json({ types });
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { FindAllTypesController };
