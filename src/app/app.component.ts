import { Component } from '@angular/core';
import {Universidad} from "./shared/models/universidad.model";
import {UniversidadService} from "./shared/services/universidad.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio148';

  public universidades: Universidad[] | null;

  constructor(public  universidadService: UniversidadService) {
    this.universidades = [];
  }

  obtenerUniversidades() {
    this.universidadService.getUniversidadesSpain().subscribe(
      {
        next: (datos: Universidad[]) => {
          this.universidades = datos;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    )
  }


}
