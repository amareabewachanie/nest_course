import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../constants/constants';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): void {
    const authJwtToken = req.headers.authorization;
    console.log('Here is the token', authJwtToken);
    if (!authJwtToken) {
      next();
      return;
    }
    try {
      const user = jwt.verify(authJwtToken, jwtConstants.secret);
      if (user) {
        console.log('Found user details in jwt', user);
        req['user'] = user;
      }
    } catch (e) {
      console.log('Error', e);
    }
    next();
  }
}
