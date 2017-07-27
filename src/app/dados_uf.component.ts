import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './dados_uf.component.html',
  styleUrls: ['./app.component.css']
})
export class dados_ufComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    id = 25
    uf: UF;
    samu: Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getUF(this.id);
        this.samu = this.samuService.getMunicipiosPorAno(this.uf);
    }
}
