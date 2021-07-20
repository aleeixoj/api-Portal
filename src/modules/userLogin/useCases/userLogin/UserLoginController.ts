import { Response } from 'express';
import { container } from 'tsyringe';

import { IRequest } from '../../../../middlewares/UserLogin';
import { UserLoginUseCase } from './UserLoginUseCase';

class UserLoginController {
  async handle(request: IRequest, response: Response): Promise<Response> {
    const { mat: matricula } = request.body;
    const { result } = request;

    const userLoginUseCase = container.resolve(UserLoginUseCase);

    try {
      const token = await userLoginUseCase.execute({ matricula, result });

      return response.status(200).json({ matricula, token });
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}
export { UserLoginController };
