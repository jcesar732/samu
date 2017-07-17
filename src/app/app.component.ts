import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    minha_uf: UF;
    municipios_atendidos: Dados[] = [];
    meu_id = 25;
    media: number = 0;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.minha_uf = this.UF();
        this.media = this.calcular();
    }

    UF(): UF {
      for (let uf of this.ufs) {
          if (uf.id == this.meu_id) return uf;
      }
    }

    calcular(): number {
      var qnt = 0;
      var total = 0;
      for (let mun of this.dados_da_samu){
        if (mun.uf_id == this.meu_id){
          qnt++;
          total+=mun.valor;
          this.municipios_atendidos.push(mun);
        }
      }
        return Math.round(total/qnt);
    }
}
