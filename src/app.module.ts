import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './repos/database/database.module';
import { ReposModule } from './repos/repos.module';
import {ConfigModule} from '@nestjs/config';
import config from './config';


@Module({
  imports: [ConfigModule.forRoot({
   // envFilePath: enviroments[process.env.NODE_ENV] || '.env',
    load: [config],
    isGlobal: true,
  }),ReposModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}