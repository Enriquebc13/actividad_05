import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';


@Controller('players')
export class PlayersController {
    constructor(private playerService: PlayersService) { }

    @Get()
    findAll(): Player[] {
        return this.playerService.findAll();
    }

    @Get(':id')
    getPlayer(
        @Param('id') id: string
    ): string | Player {
        return this.playerService.getPlayer(parseInt(id));
    }

    @Post()
    create(@Body() createPlayerDto: CreatePlayerDto) {
        return this.playerService.createPlayer(createPlayerDto);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() UpdatePlayerDto: UpdatePlayerDto) {
        return this.playerService.updatePlayer(Number(id), UpdatePlayerDto);
    }

    @Delete(':id')
    deletePlayer(
        @Param('id') id: string
    ): string | Player {
        return this.playerService.deletePlayer(parseInt(id));
    }
}
