import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Piatto } from 'src/piatti/piatti.schema';

export type OrdineDocument = HydratedDocument<Ordine>;

@Schema()
export class Ordine {
    //array piatti
    //numtavolo
    //totaleprezzo
    //data
    @Prop()
    numeroTavolo: number;

    @Prop()
    data: Date;

    @Prop()
    totale: number;

    @Prop()
    listapiatti: [String];
}

export const OrdineSchema = SchemaFactory.createForClass(Ordine);