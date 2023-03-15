import { Module } from '@nestjs/common';
import { ordiniController } from './ordini.controller';
import { ordiniService } from './ordini.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ordine , OrdineSchema } from '../ordini/ordini.schema';
import { Piatto , PiattoSchema } from '../piatti/piatti.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ordine.name, schema: OrdineSchema }]),MongooseModule.forFeature([{ name: Piatto.name, schema: PiattoSchema }])],
  controllers: [ ordiniController],
  providers: [ ordiniService],
})
export class ordineModule {}

//nest g module