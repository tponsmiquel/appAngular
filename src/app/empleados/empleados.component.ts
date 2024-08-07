import { Component } from "@angular/core";

@Component({
  selector: "app-empleados",
  templateUrl: "./empleados.component.html",
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent { 
  empleados = [
 
    {id: "Alex", edad: 25},
    {id: "Yohana", edad: 15},
    {id: "Toni", edad: 45},
    ]
}
