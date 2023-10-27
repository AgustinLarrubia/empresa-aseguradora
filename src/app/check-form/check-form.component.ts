import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

  vehicleSelected: string = '';

  constructor() { }

  ngOnInit() { 
    this.getVehicleText
  }

  getVehicleText() {
    switch (this.vehicleSelected) {
      case 'AutoPatenteNueva':
        return 'AutoPatenteNueva';
      case 'AutoPatenteAntigua':
        return 'AutoPatenteAntigua';
      case 'MotoPatenteNueva':
        return 'MotoPatenteNueva';
      case 'MotoPatenteAntigua':
        return 'MotoPatenteAntigua';
      default:
        return 'Seleccione una opcion ...';
    }
  }
}
