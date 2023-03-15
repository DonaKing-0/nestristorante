import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ordiniService } from './ordini.service';

@Controller()
export class ordiniController {
  constructor(private ordiniservice : ordiniService){}

  @Get('/listaordini')
  getOrdini() {
    return this.ordiniservice.getls()
    //return 'lista gatti';
  }
  
  @Get('/untavolo/:numtavolo')
  getOrdine(@Param('numtavolo') num :Number): object {
    return this.ordiniservice.gettavolo(num);
  }
  
  //bonus return future orders di un tavolo
  @Get('/futuri/:numtavolo')
  getFuturi(@Param('numtavolo') num :Number): object {
    return this.ordiniservice.getfuturitavolo(num);
  }

  @Post('/nuovoordine/:body')
  newOrdine(@Param('body') body :string, @Body() bodyv ): object {
    //console.log("ciao")
    //console.log(bodyv)
    return this.ordiniservice.nuovo(bodyv);
    //return body+' '+bodyv.prova;
  }
  /*
  @Put('/modgatto/:id/:body')
  modGatto(@Param() param, @Body() body ): object {
    return this.ordiniservice.modCat(param.id, body.nome)
    //return 'modificato gatto '+param.id+' con '+param.body+' '+body.prova;
  }
  @Delete('/cancgatto/:id')
  dalGatto(@Param('id') id :string): object {
    return this.ordiniservice.delCat(id)
    //return 'eliminato gatto'+id;
  }*/
}