import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, FormGroup} from '@angular/forms';
import { OutletContext } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  clientData = new FormGroup({
    clientName: new FormControl<string>(''),
    clientLastName: new FormControl<string>(''),
    clientBrand: new FormControl<string>(''),
    clientModel: new FormControl<string>(''),
    clientYear: new FormControl<string>(''),
    clientEmail: new FormControl<string>(''),
    clientPhone: new FormControl<string>('')
  })



  constructor(private matDialog:MatDialog){}
    openDialog(){
      console.log(this.clientData)
      this.matDialog.open(DialogComponent,{
        width:'40%',
        height: '70%',
        data: this.clientData,
      })
    }
}
