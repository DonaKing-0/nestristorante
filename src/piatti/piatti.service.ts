import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Piatto, PiattoDocument } from './piatti.schema';

@Injectable()
export class piattiService {
  //connessione db
  constructor(@InjectModel(Piatto.name) private piattoModel: Model<PiattoDocument>){}

  async getls(): Promise<Piatto[]> {
    return this.piattoModel.find();//.exec()????
  }
  /*
  async getg(idcercato:string): Promise<Piatto> {
    return this.piattoModel.findOne({id: idcercato});//.exec()????
    //    const a=_.pick(await altroSchema.findOne(), ['stagioni', 'categorie', 'unitamisura']);
  
  }
  async mod(idcercato:string, nom: string): Promise<Piatto> {
    const cercato = await this.piattoModel.findOne({id: idcercato});
    cercato.nome=nom;
    //salva
    //se non c'è...
   // if (element) {
    return this.piattoModel.findOne({id: idcercato});//.exec()????
   // element.set(el);
  
     //   await element.save();
  }
  async nuo(body): Promise<Piatto> {
    //controlli?
    //salve
    //return response.json(await prodSchema.create(request.body));
    return this.piattoModel.findOne();//.exec()????
  }
  async canc(idc: string): Promise<Piatto> {
    //find delete
    //salve
    //const result = await prodSchema.deleteOne({ id: idc });
    return this.piattoModel.findOne();//.exec()????
  }
*/
}