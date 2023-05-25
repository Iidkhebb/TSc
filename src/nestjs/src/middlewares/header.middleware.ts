import {
  HttpException,
  Injectable,
  Logger,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class AuthorisationHeaderMiddleware implements NestMiddleware {
  logger: Logger;

  constructor() {
    this.logger = new Logger('HEADER_MIDDLEWARE');
  }

  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization === undefined) {
      const jwt = req.cookies.jwt;
      this.logger.log('HERE ====> ', req.cookies);
      if (jwt) {
        req.headers['authorization'] = `Bearer ${jwt}`;
        this.logger.log('JWT found in the cookie');
        next();
        return;
      }
      this.logger.warn('NO Authorisation in the header');
      throw new HttpException('NO Authorisation in the header', 401);
    }
    next();
  }

}
