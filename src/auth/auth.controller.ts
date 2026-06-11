import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    singIn(@Request() req) {
        return req.user;
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/logout')
    async logout(@Request()req){
        return req.logout();
    }
}