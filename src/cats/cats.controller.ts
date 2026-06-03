import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';

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
}