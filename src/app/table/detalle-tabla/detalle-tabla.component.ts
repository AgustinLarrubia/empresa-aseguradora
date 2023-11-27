import { Component, Input, OnInit } from '@angular/core';
import { ISeguros } from 'src/app/ISeguros';
import { DatosSeguroService } from 'src/app/datos-seguro.service';

@Component({
  selector: 'app-detalle-tabla',
  templateUrl: './detalle-tabla.component.html',
  styleUrls: ['./detalle-tabla.component.scss']
})
export class DetalleTablaComponent implements OnInit {

  @Input() seguroDetalle: ISeguros | undefined;
  errorMessage = '';
  constructor(public datosSeguroService: DatosSeguroService) {

  }

  public ngOnInit(): void {

    if (Number(this.datosSeguroService.idSeleccionado)) {
      this.cargarProducto(this.datosSeguroService.idSeleccionado);

    }
  }

  cargarProducto(idSeleccionado: string | undefined) {

    this.datosSeguroService.obtenerSeguroPorID(idSeleccionado).subscribe({
      next: seguroDetalle => this.seguroDetalle = seguroDetalle,
      error: err => this.errorMessage = err
    });
  }
}
