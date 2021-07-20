import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, label, value, email, cargo, group, color, matricula } =
      request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    try {
      await createUserUseCase.execute({
        name,
        matricula,
        label,
        value,
        email,
        cargo,
        group,
        color,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { CreateUserController };
