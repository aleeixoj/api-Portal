import { Response } from 'express';
import { container } from 'tsyringe';

import { IRequest } from '../../../../middlewares/UserLogin';
import { UserLogoutUseCase } from './UserLogoutUseCase';

class UserLogoutController {
  async handle(request: IRequest, response: Response): Promise<Response> {
    const { mat: matricula } = request.body;
    const userLogoutUseCase = container.resolve(UserLogoutUseCase);
    try {
      const userLogout = userLogoutUseCase.execute(matricula);
      return response.status(200).json({ userLogout });
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}
export { UserLogoutController };
