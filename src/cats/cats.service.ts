import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
    private cats: Cat[] = [
        {
            id: 1,
            name: 'Michi',
            age: 2,
            breed: 'Siamés',
        },
        {
            id: 2,
            name: 'Manchas',
            age: 1,
            breed: 'Persa',
        },
        {
            id: 3,
            name: 'Pelusa',
            age: 3,
            breed: 'Angora',
        },
    ];

    findAll(): Cat[] {
        return this.cats;
    }

    getCat(id: number): string | Cat {
        const cat = this.cats.find(item => item.id === id)
        if (!cat) {
            return "Gato no encontrado"
        }
        return cat;
    }
}