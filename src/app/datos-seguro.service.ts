import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatosSeguroService {
  
  public searchQuery: string = '';
  public campo: string[] = ["patente", "fecha"];

  constructor(private http: HttpClient){ }

  public getJSON(): Observable<any> {

    return this.http.get("../assets/datosSeguro.json");
  }
}
