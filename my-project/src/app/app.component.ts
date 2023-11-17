import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public EmpArray:any[] = [
    {name: "Smith", gender: "M"},
    {name: "Scott", gender: "m"},
    {name: "Nancy", gender: "F"},
    {name: "Ruth", gender: "f"}
  ];
}
