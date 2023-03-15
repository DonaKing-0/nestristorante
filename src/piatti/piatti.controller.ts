import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { piattiService } from './piatti.service';

@Controller()
export class piattiController {
  constructor(private piattiservice : piattiService){}

  @Get('/listapiatti')
  getPiatti() {
    return this.piattiservice.getls()
    //return 'lista gatti';
  }
  /*
  @Get('/ungatto/:id')
  getGatto(@Param('id') id :string): object {
    return this.piattiservice.getCat(id);
  }
  @Post('/nuovogatto/:body')
  newGatto(@Param('body') body :string, @Body() bodyv ): object {
    return this.piattiservice.newCat(bodyv);
    //return body+' '+bodyv.prova;
  }
  @Put('/modgatto/:id/:body')
  modGatto(@Param() param, @Body() body ): object {
    return this.piattiservice.modCat(param.id, body.nome)
    //return 'modificato gatto '+param.id+' con '+param.body+' '+body.prova;
  }
  @Delete('/cancgatto/:id')
  dalGatto(@Param('id') id :string): object {
    return this.piattiservice.delCat(id)
    //return 'eliminato gatto'+id;
  }*/
}