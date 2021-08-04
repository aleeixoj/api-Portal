import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSystemUseCase } from './CreateSystemUseCase';

class CreateSystemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { system } = request.body;
    const createSystemUseCase = container.resolve(CreateSystemUseCase);

    try {
      await createSystemUseCase.execute({ label: system, value: system });
      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ status_message: error.message });
    }
  }
}

export { CreateSystemController };
