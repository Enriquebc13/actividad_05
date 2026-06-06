import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    getCat(
        @Param('id') id: string
    ): string | Cat {
        return this.catsService.getCat(parseInt(id));
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.createCat(createCatDto);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateCatDto: UpdateCatDto) {
        return this.catsService.updateCat(Number(id), updateCatDto);
    }

    @Delete(':id')
    deleteCat(
        @Param('id') id: string
    ): string | Cat {
        return this.catsService.deleteCat(parseInt(id));
    }
}