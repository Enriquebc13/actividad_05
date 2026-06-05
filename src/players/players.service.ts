import { Injectable } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';

@Injectable()
export class PlayersService {
    private players: Player[] = [
        {
            id: 1,
            firstName: "Lionel",
            lastName: "Messi",
            age: 38,
            position: "Delantero",
            nationality: "Argentina"
        },
        {
            id: 2,
            firstName: "Cristiano",
            lastName: "Ronaldo",
            age: 41,
            position: "Delantero",
            nationality: "Portugal"
        },
        {
            id: 3,
            firstName: "Neymar",
            lastName: "da Silva Santos Júnior",
            age: 34,
            position: "Delantero",
            nationality: "Brasil"
        }
    ];

    findAll(): Player[] {
        return this.players
    }

    getPlayer(id: number): string | Player {
        const cat = this.players.find(item => item.id === id)
        if (!cat) {
            return "Jugador no encontrado"
        }
        return cat;
    }

    createPlayer(createPlayerDto: CreatePlayerDto): Player {
        const newplayer: Player = {
            id: Date.now(),
            ...createPlayerDto,
        };
        this.players.push(newplayer);
        return newplayer;
    }

    updatePlayer(id: number, UpdatePlayerDto: UpdatePlayerDto): Player | string {
        const player = this.players.find(item => item.id === id);

        if (!player) {
            return 'Jugador no encontrado';
        }

        if (UpdatePlayerDto.firstName !== undefined) {
            player.firstName = UpdatePlayerDto.firstName;
        }

        if (UpdatePlayerDto.lastName !== undefined) {
            player.lastName = UpdatePlayerDto.lastName;
        }

        if (UpdatePlayerDto.age !== undefined) {
            player.age = UpdatePlayerDto.age;
        }

        if (UpdatePlayerDto.position !== undefined) {
            player.position = UpdatePlayerDto.position;
        }

        if (UpdatePlayerDto.nationality !== undefined) {
            player.nationality = UpdatePlayerDto.nationality;
        }

        return player;
    }

    deletePlayer(id: number): string {
        const deletePlayer = this.players.find(item => item.id === id);
        if (!deletePlayer) {
            return "El Jugador no fue encontrado"
        }
        this.players = this.players.filter(item => item.id !== id)
        return "Jugador eliminado"
    }

}
