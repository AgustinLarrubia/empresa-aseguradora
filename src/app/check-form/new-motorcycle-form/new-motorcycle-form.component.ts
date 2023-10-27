import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-motorcycle-form',
  templateUrl: './new-motorcycle-form.component.html',
  styleUrls: ['./new-motorcycle-form.component.scss']
})
export class NewMotorcycleFormComponent {
  newMotorcycleForm = new FormGroup({
    motorcycleBrand: new FormControl<string>(''),
    motorcycleModel: new FormControl<string>(''),
    motorcycleVersion: new FormControl<string>(''),
    motorcycleYear: new FormControl<string>(''),
    clientPhone: new FormControl<string>(''),
    clientLicensePlate: new FormControl<string>(''),
  })
}
