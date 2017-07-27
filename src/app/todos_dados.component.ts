import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {DadoNome} from './types/modelonovo';
import {ModeloNovoService} from './services/modelonovo.service'

import {UFs} from './services/mock-ufs';
import {VALORES} from './services/mock-samu_municipios_atendidos_por_estado';

@Component({
  selector: 'app-root',
  templateUrl: './todos_dados.component.html',
  styleUrls: ['./app.component.css']
})
export class todos_dadosComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    id = 25
    uf: UF;
    media: number;
    samu: Dados[];
    dados: DadoNome[];

    constructor(private ufService: UFService, private samuService: SamuService, private modeloNovoService: ModeloNovoService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getUF(this.id);
        this.media = this.samuService.geMediaMunicipios(this.id);
        this.samu = this.samuService.getMunicipiosPorAno(this.uf);
        this.dados = this.modeloNovoService.mesclardados();
    }

}
