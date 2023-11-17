import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.css']
})
export class AssignmentOneComponent {
  public EmpArray:any[] = [
    {name: "Smith", gender: "M"},
    {name: "Scott", gender: "m"},
    {name: "Nancy", gender: "F"},
    {name: "Ruth", gender: "f"}
  ];
}
