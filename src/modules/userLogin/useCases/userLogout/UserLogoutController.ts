import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { UserLogoutUseCase } from './UserLogoutUseCase';

class UserLogoutController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { mat: matricula } = request.body;
    const userLogoutUseCase = container.resolve(UserLogoutUseCase);

    const userLogout = userLogoutUseCase.execute(matricula);
    return response.status(200).json({ userLogout });
  }
}
export { UserLogoutController };
