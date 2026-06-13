import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/register-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async register(registerUserDto: RegisterUserDto) {
        const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

        const user = await this.usersService.create({
            email: registerUserDto.email,
            username: registerUserDto.username,
            name: registerUserDto.name,
            password: hashedPassword,
            image: registerUserDto.image,
        } as any);

        if (!user) {
            return null;
        }

        const { password, ...result } = user;
        return result;
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        //ToDo: Comparar contraseña cifrada
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }

        const userFromDb = await this.usersService.findOneFromDb(username);
        if (userFromDb && (await bcrypt.compare(pass, userFromDb.password))) {
            const { password, ...result } = userFromDb;
            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
