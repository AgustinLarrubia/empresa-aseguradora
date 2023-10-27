import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-car-form',
  templateUrl: './new-car-form.component.html',
  styleUrls: ['./new-car-form.component.scss']
})
export class NewCarFormComponent {
  newCarForm = new FormGroup({
    carBrand: new FormControl<string>(''),
    carModel: new FormControl<string>(''),
    carVersion: new FormControl<string>(''),
    carYear: new FormControl<string>(''),
    clientPhone: new FormControl<string>(''),
    clientLicensePlate: new FormControl<string>(''),
  })
}
