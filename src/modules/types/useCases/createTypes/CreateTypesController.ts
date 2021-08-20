import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTypesUseCase } from './CreateTypesUseCase';

class CreateTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type } = request.body;
    const createTypesUseCase = container.resolve(CreateTypesUseCase);
    try {
      await createTypesUseCase.execute({ label: type, value: type });

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ status_message: error.message });
    }
  }
}

export { CreateTypesController };
