import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Universidad} from "../models/universidad.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  constructor(private httpClient: HttpClient) {
  }
  public getUniversidadesSpain():Observable<Universidad[]>{
    return this.httpClient.get<Universidad[]>("http://universities.hipolabs.com/search?country=spain")
  }
}
