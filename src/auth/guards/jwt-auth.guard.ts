import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // <-- Importa esto
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator'; 
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Revisa si la ruta o la clase entera tienen la etiqueta @Public()
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true; // Si es publica dejala pasar sin pedir token
    }

    return super.canActivate(context); // Si no es publica, aplica la seguridad normal
  }
}