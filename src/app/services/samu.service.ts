import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  geMediaMunicipios(id: number): number{
    let numero: number;
    numero = 0;
    let anos: number;
    anos = 0;
    for(let entrada of VALORES)
    {
      if(entrada.uf_id == id)
      {
        numero += entrada.valor;
        anos++;
      }
    }
    return Math.round(numero/anos);
  }
  getMunicipiosPorAno(uf: UF): Dados[]{
    let valores: Dados[] = [];
    let i: number;
    i = 0;
    for(let entrada of VALORES)
    {
      if(entrada.uf_id == uf.id)
      {
        valores[i] = entrada;
        i++;
      }
    }
    return valores;
  }
}
