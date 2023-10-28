import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-old-motorcycle-form',
  templateUrl: './old-motorcycle-form.component.html',
  styleUrls: ['./old-motorcycle-form.component.scss']
})
export class OldMotorcycleFormComponent {
  oldMotorcycleForm = new FormGroup({
    motorcycleBrand: new FormControl<string>(''),
    motorcycleModel: new FormControl<string>(''),
    motorcycleVersion: new FormControl<string>(''),
    motorcycleYear: new FormControl<string>(''),
    motorcycleEmail: new FormControl<string>(''),
    clientPhone: new FormControl<string>(''),
    clientLicensePlate: new FormControl<string>(''),
  })
}
