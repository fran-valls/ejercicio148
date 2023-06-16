import {Component, Input} from '@angular/core';
import {Universidad} from "../../shared/models/universidad.model";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() public universidad!: Universidad;
}
