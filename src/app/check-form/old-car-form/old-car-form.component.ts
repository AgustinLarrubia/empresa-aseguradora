import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-old-car-form',
  templateUrl: './old-car-form.component.html',
  styleUrls: ['./old-car-form.component.scss']
})
export class OldCarFormComponent {
  oldCarForm = new FormGroup({
    carBrand: new FormControl<string>(''),
    carModel: new FormControl<string>(''),
    carVersion: new FormControl<string>(''),
    carYear: new FormControl<string>(''),
    clientPhone: new FormControl<string>(''),
    clientLicensePlate: new FormControl<string>(''),
  })
}
