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
    brasil_uf: UF;
    media: number = 0;
    municipios_atendidos: Dados[] = [];
    estado_id = 25;
    
    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.brasil_uf = this.UF();
        this.media = this.calcular();
    }
    UF(): UF {
      for (let uf of this.ufs) {
          if (uf.id == this.estado_id) return uf;
      }
    }
    calcular(): number {
      var anos = 0;
      var tudo = 0;
      for (let mun of this.dados_da_samu){
        if (mun.uf_id == this.estado_id){
          anos++;
          tudo+=mun.valor;
          this.municipios_atendidos.push(mun);
        }
      }
        return Math.round(tudo/anos);
    }
}
