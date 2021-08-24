import * as dotenv from 'dotenv';
import { Response, NextFunction, Request } from 'express';

import { ADPromisses } from '../conexao_ad';
import { AppError } from '../errors/AppError';

dotenv.config();

async function connectToAd(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> {
  const { matricula, password } = request.body;

  if (matricula === '' || matricula === undefined) {
    throw new AppError('Matricula necessária', 401);
  }

  if (password === '' || password === undefined) {
    throw new AppError('Senha obrigatória', 401);
  }

  const server_ad = process.env.AD_SERVER;
  const matricula_login = matricula + server_ad;
  const result_conect_ad = await ADPromisses;
  const resultado = await result_conect_ad.loginUser(matricula_login, password);
  if (!resultado.success) {
    throw new AppError(
      'Erro ao logar, consulte seu SAL para mais informações',
      401
    );
  }
  request.result = resultado;
  return next();
}

export { connectToAd };
