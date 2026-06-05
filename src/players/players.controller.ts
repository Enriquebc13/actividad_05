import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dtos/create-player.dto';


@Controller('players')
export class PlayersController {
    constructor(private playerService: PlayersService) { }

    @Get()
    findAll(): Player[] {
        return this.playerService.findAll();
    }

    @Get(':id')
    getCat(
        @Param('id') id: string
    ): string | Player {
        return this.playerService.getPlayer(parseInt(id));
    }

    @Post()
    create(@Body() createPlayerDto: CreatePlayerDto) {
        return this.playerService.createPlayer(createPlayerDto);
    }
}
