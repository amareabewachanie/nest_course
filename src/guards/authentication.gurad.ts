import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGurad implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const host = context.switchToHttp(),
      request = host.getRequest();
    const user = request['user'];
    if (!user) {
      console.log('User is not authenticated,denying access ...');
      throw new UnauthorizedException('');
    }
    console.log('User is authenticated, granting access ...');
    return true;
  }
}
