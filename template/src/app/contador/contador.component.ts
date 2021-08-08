import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  numero = 0;

  exibirConteudo = false;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.numero++;
  }

  toggle() {
    this.exibirConteudo = !this.exibirConteudo;
  }

}
