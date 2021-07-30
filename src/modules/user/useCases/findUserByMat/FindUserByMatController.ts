import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByMatUseCase } from './FindUserByMatUseCase';

class FindUserByMatController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;
    const findUserByMatUseCase = container.resolve(FindUserByMatUseCase);
    const userByMat = await findUserByMatUseCase.execute(authorization);

    return response.json({ userByMat });
  }
}

export { FindUserByMatController };
