import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';


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
}
