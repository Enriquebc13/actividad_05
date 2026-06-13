import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Public } from "./decorators/public.decorator";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    singIn(@Request() req) {
        return this.authService.login(req.user);
    }
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('auth/logout')
    async logout(@Request()req){
        return req.logout();
    }
}