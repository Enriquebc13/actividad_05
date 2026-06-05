import { Injectable } from '@nestjs/common';
import { Player } from './entities/player.entity';

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

}
