import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosModule } from './empleados/empleados.module';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [RouterOutlet, EmpleadosModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miprimeraApp';
  saludo = "Hola alumnos de Angular";
}
