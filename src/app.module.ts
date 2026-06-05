import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [CatsModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
