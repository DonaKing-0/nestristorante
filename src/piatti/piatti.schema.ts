import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PiattoDocument = HydratedDocument<Piatto>;

@Schema()
export class Piatto {
    @Prop()
    nome: string;

    @Prop()
    prezzo: number;
}

export const PiattoSchema = SchemaFactory.createForClass(Piatto);