import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CheckFormComponent } from './check-form/check-form.component';
import { TableComponent } from './table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NewCarFormComponent } from './check-form/new-car-form/new-car-form.component';
import { OldCarFormComponent } from './check-form/old-car-form/old-car-form.component';
import { OldMotorcycleFormComponent } from './check-form/old-motorcycle-form/old-motorcycle-form.component';
import { NewMotorcycleFormComponent } from './check-form/new-motorcycle-form/new-motorcycle-form.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { 
	IgxGridModule,
	IgxButtonGroupModule
 } from "igniteui-angular";
 import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CheckFormComponent,
    TableComponent,
    DialogComponent,
    NewCarFormComponent,
    OldCarFormComponent,
    OldMotorcycleFormComponent,
    NewMotorcycleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxButtonGroupModule,
    IgxPreventDocumentScrollModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
