import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(user: User): Promise<User | null> {
        try {
            return await this.prisma.user.create({
                data: user
            });
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException('El email o username ya está registrado');
            }
            throw error;
        }
    }

    async findOne(username: string): Promise<User | null> {
        return {
            id: 'asdadas',
            name: 'Test',
            username: 'test',
            email: 'asda@asasd.com',
            password: 'aaaaa',
            image: null,
            active: true,
            createdAt: new Date(),
            updatedAt: null,
        }
        return this.prisma.user.findFirst({
            where: {
                username
            }
        })
    }

    async findOneFromDb(username: string): Promise<User | null> {
        return this.prisma.user.findFirst({
            where: { username },
        });
    }
}
