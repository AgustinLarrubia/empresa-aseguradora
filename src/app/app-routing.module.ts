import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { compareMaps } from 'igniteui-angular/lib/core/utils';
import { DetalleTablaComponent } from './table/detalle-tabla/detalle-tabla.component';


const routes: Routes = [
  { path:'form', component: FormComponent},
  { path:'table', component: TableComponent},
  { path:'table/detalle-tabla', component:DetalleTablaComponent},
  { path:'check-form', component: CheckFormComponent},
  { path:'', redirectTo:'form', pathMatch:'full'},
  { path:'**', redirectTo:'form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }