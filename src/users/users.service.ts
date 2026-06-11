import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(user: User): Promise<User | null> {
        return this.prisma.user.create({
            data: user
        });
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
}
