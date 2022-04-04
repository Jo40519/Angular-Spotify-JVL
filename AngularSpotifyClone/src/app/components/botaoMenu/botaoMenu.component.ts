import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botaoMenu',
  templateUrl: './botaoMenu.component.html',
  styleUrls: ['./botaoMenu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input()

  descricao = '';

  @Input()

  selecionado = false;

  @Output()
  click = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit()
  }

}
