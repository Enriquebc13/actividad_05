import {Controller, Get } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }
}