import { PacienteComponent } from './paciente/paciente.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'formComponent', component: FormComponentComponent },
  { path: 'list', component: PacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }