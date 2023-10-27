import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, FormGroup} from '@angular/forms';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  clientData = new FormGroup({
    clientName: new FormControl<string>(''),
    clientLastName: new FormControl<string>(''),
    clientEmail: new FormControl<string>(''),
    clientPhone: new FormControl<string>(''),
    clientLicensePlate: new FormControl<string>(''),
  })



  constructor(private matDialog:MatDialog){}
    openDialog(){
      console.log(this.clientData)
      this.matDialog.open(DialogComponent,{
        width:'40%',
        height: '50%',
        data: this.clientData,
      })
    }
}