import { ChangeDetectorRef, Injectable, Input, computed, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { ISeguros } from "./ISeguros";


@Injectable({
  providedIn: 'root'
})
export class DatosSeguroService {

  private fileUrl: string = "../assets/datosSeguro.json";
  public selectedValue: string = '';
  @Input() cacheFiltro: ISeguros[] = [];
  @Input() _listFilter: string = '';
  @Input() isFilterActive: boolean = false;
  @Input() idSeleccionado: string | undefined = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log(this._listFilter);
  }

  constructor(private http: HttpClient) { }

  /*   listFilter = signal('');
    filteredProducts = computed(() => this.obtenerSeguros(this.listFilter())); */



  public obtenerSeguros(listFilter: string): Observable<ISeguros[]> {
    let upperCaseListFilter = listFilter.toUpperCase();

    return this.http.get<ISeguros[]>(this.fileUrl)
      .pipe(

        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  obtenerSeguroPorID(id: string | undefined): Observable<ISeguros | undefined> {
    return this.obtenerSeguros(this.listFilter)
      .pipe(
        map((seguros: ISeguros[]) => seguros.find(seguro => seguro.ProductID === id))
      );
  }



  /*   onFilterChange(value: string) {
      this.listFilter.set(value);
    } */

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
