import * as dotenv from 'dotenv';
import { Response, NextFunction, Request } from 'express';

import { ADPromisses } from '../conexao_ad';

dotenv.config();

export interface IRequest extends Request {
  result: any;
}

async function connectToAd(
  request: IRequest,
  response: Response,
  next: NextFunction
): Promise<void | Response> {
  const { mat, password } = request.body;

  if (mat === '' || mat === undefined) {
    return response.json({ status_message: 'A matricula é necessaria' });
  }

  if (password === '' || password === undefined) {
    return response.json({
      status_message: 'A senha é obrigatoria',
    });
  }

  const server_ad = process.env.AD_SERVER;
  const matricula_login = mat + server_ad;
  const result_conect_ad = await ADPromisses;
  const resultado = await result_conect_ad.loginUser(matricula_login, password);
  if (!resultado.success) {
    return response.send({
      status_message: 'Erro ao logar, consulte seu CSL para mais informações',
    });
  }
  request.result = resultado;
  return next();
}

export { connectToAd };
