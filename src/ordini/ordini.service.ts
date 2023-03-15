import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ordine, OrdineDocument } from './ordini.schema';
import { Piatto, PiattoDocument } from 'src/piatti/piatti.schema';
import mongoose from 'mongoose'

const ObjectId2 = mongoose.Types.ObjectId
// object id valido
function isValidObjectId(id){
  if(ObjectId2.isValid(id)){
    if((String)(new ObjectId2(id)) === id){
      return true;	
    }
    return false;
  }
  return false;
}

@Injectable()
export class ordiniService {
  //connessione db
  constructor(@InjectModel(Ordine.name) private ordineModel: Model<OrdineDocument>, @InjectModel(Piatto.name) private piattoModel: Model<PiattoDocument>){}
  //, @InjectModel(Piatto.name) private piattoModel: Model<PiattoDocument>

  async getls(): Promise<Ordine[]> {
    return this.ordineModel.find();//.exec()????
  }
  
  async gettavolo(tavolo:Number): Promise<Ordine[]> {
    return this.ordineModel.find({numeroTavolo: tavolo});//.exec()????
  }

  async getfuturitavolo(tavolo:Number): Promise<Ordine[]> {
    //data > oggi
    
    return this.ordineModel.find({numeroTavolo: tavolo, data: {$gt: Date()}});//.exec()????
  }

  async nuovo(body): Promise<Ordine> {
        //piatti da id
        //somma tutti prezzi
        let tot =0;
        let d = new Date()
        d.setDate(d.getDate() + 1);
        const lista=[]

        //console.log(body.piatti.length)
    if (body.listapiatti && body.listapiatti.length){
        await Promise.all(body.listapiatti.map(async(i)=>{
            //console.log(i)
            if(isValidObjectId(i)){
                const id=new mongoose.Types.ObjectId(i);
                //console.log(id)
                const piatto= await this.piattoModel.findOne({_id: id})
                lista.push(i)
                tot= tot + piatto.prezzo
            }
        }))
    }
        //console.log(lista)
        body.totale=tot
        body.listapiatti=lista
        body.data = Date()
        const nuovo= await this.ordineModel.create(body);
        return nuovo;
  }

  /*
  async mod(idcercato:string, nom: string): Promise<Ordine> {
    const cercato = await this.ordineModel.findOne({id: idcercato});
    cercato.nome=nom;
    //salva
    //se non c'è...
   // if (element) {
    return this.ordineModel.findOne({id: idcercato});//.exec()????
   // element.set(el);
  
     //   await element.save();
  }
  async nuo(body): Promise<Ordine> {
    //controlli?
    //salve
    //return response.json(await prodSchema.create(request.body));
    return this.ordineModel.findOne();//.exec()????
  }
  async canc(idc: string): Promise<Ordine> {
    //find delete
    //salve
    //const result = await prodSchema.deleteOne({ id: idc });
    return this.ordineModel.findOne();//.exec()????
  }
*/
}