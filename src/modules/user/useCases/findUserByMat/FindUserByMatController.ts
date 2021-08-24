import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByMatUseCase } from './FindUserByMatUseCase';

class FindUserByMatController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { matricula } = request.user;
    const findUserByMatUseCase = container.resolve(FindUserByMatUseCase);
    const userByMat = await findUserByMatUseCase.execute(matricula);

    return response.json({ userByMat });
  }
}

export { FindUserByMatController };
