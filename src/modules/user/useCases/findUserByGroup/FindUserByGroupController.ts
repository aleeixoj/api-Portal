import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByGroupUseCase } from './FindUserByGroupUseCase';

class FindUserByGroupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findUserByGroupUseCase = container.resolve(FindUserByGroupUseCase);

    const userByGroup = await findUserByGroupUseCase.execute();

    return response.json(userByGroup);
  }
}

export { FindUserByGroupController };
