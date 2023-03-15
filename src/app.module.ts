import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { piattoModule } from './piatti/piatti.module';
import { ordineModule } from './ordini/ordini.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config'

//console.log(process.env.mongo_uri)

@Module({
  imports: [ piattoModule, ordineModule, MongooseModule.forRoot(process.env.mongo_uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
