import * as dotenv from 'dotenv';
import { Response, NextFunction, Request } from 'express';

import { ADPromisses } from '../conexao_ad';

dotenv.config();

async function connectToAd(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> {
  const { matricula, password } = request.body;

  if (matricula === '' || matricula === undefined) {
    return response.json({ status_message: 'A matricula é necessaria' });
  }

  if (password === '' || password === undefined) {
    return response.json({
      status_message: 'A senha é obrigatoria',
    });
  }

  const server_ad = process.env.AD_SERVER;
  const matricula_login = matricula + server_ad;
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
