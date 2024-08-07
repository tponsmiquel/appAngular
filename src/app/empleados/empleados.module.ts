import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { EmpleadoComponent } from "../empleado/empleado.component";

@NgModule({
  declarations: [EmpleadosComponent],
  imports: [CommonModule, EmpleadoComponent],
  exports: [EmpleadosComponent]
})
export class EmpleadosModule { }
