import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByGroupUseCase } from './FindUserByGroupUseCase';

class FindUserByGroupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findUserByGroupUseCase = container.resolve(FindUserByGroupUseCase);
    try {
      const userByGroup = await findUserByGroupUseCase.execute();

      return response.json(userByGroup);
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { FindUserByGroupController };
