import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';
import { UFService } from './uf.service';
import { DadoNome} from '../types/modelonovo'

@Injectable()
export class ModeloNovoService {

constructor(private ufService: UFService) { }

  mesclardados(): DadoNome[]{
    let dados_finais: DadoNome[] = [];
    let i: number;
    i = 0;
    let todos : Dados[] = VALORES.sort((uf1, uf2) => {
      if (uf1.uf_id > uf2.uf_id) return 1;
      if (uf1.uf_id < uf2.uf_id) return -1;
      return 0;
    });

    todos.forEach((item) => {
      let dado : DadoNome = new DadoNome();
      dado.ano = item.ano;
      dado.valor = item.valor;
      dado.uf = this.ufService.getUF(item.uf_id);
      dados_finais.push(dado);
    });
    return dados_finais;
  }
}
