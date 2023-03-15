import { Module } from '@nestjs/common';
import { piattiController } from './piatti.controller';
import { piattiService } from './piatti.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Piatto , PiattoSchema } from '../piatti/piatti.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Piatto.name, schema: PiattoSchema }])],
  controllers: [ piattiController],
  providers: [ piattiService],
})
export class piattoModule {}

//nest g module