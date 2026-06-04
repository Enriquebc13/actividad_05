import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';

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

    createCat(createCatDto: CreateCatDto): Cat {
        const newCat: Cat = {
            id: Date.now(),
            ...createCatDto,
        };

        this.cats.push(newCat);
        return newCat;
    }

    updateCat(id: number, updateCatDto: UpdateCatDto): Cat | string {
        const cat = this.cats.find(cat => cat.id === id);

        if (!cat) {
            return 'Gato no encontrado';
        }

        if (updateCatDto.name !== undefined) {
            cat.name = updateCatDto.name;
        }

        if (updateCatDto.age !== undefined) {
            cat.age = updateCatDto.age;
        }

        if (updateCatDto.breed !== undefined) {
            cat.breed = updateCatDto.breed;
        }

        return cat;
    }

    deleteCat(id: number): string {
        const deleteCat = this.cats.find(item => item.id === id);
        if (!deleteCat) {
            return "El gato no fue encontrado"
        }
        this.cats = this.cats.filter(item => item.id !== id)
        return "Gato eliminado"
    }
}