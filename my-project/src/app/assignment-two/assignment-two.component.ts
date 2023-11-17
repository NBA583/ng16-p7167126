import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent {
  public min = null;
  public max = null;
  public minRange: any;
  public maxRange: any;
  public deptno = -1;
  public empsArray:Employee[] = [
    {empno: 7167001, ename: "NBA-A", job: "Manager", salary: 3900, deptno: 10},
    {empno: 7167002, ename: "NBA-B", job: "Lead", salary: 2900, deptno: 10},
    {empno: 7167003, ename: "NBA-C", job: "Programmer", salary: 1900, deptno: 10},
    {empno: 7167004, ename: "NBA-D", job: "Tester", salary: 900, deptno: 10},
    {empno: 7167005, ename: "NBA-E", job: "Manager", salary: 3900, deptno: 20},
    {empno: 7167006, ename: "NBA-F", job: "Lead", salary: 2900, deptno: 20},
    {empno: 7167007, ename: "NBA-G", job: "Programmer", salary: 1900, deptno: 20},
    {empno: 7167008, ename: "NBA-H", job: "Tester", salary: 900, deptno: 20},
    {empno: 7167009, ename: "NBA-I", job: "Manager", salary: 3900, deptno: 30},
    {empno: 7167010, ename: "NBA-J", job: "Lead", salary: 2900, deptno: 30},
    {empno: 7167011, ename: "NBA-K", job: "Programmer", salary: 1900, deptno: 30},
    {empno: 7167012, ename: "NBA-L", job: "Tester", salary: 900, deptno: 30},
    {empno: 7167013, ename: "NBA-M", job: "Manager", salary: 3900, deptno: 40},
    {empno: 7167014, ename: "NBA-N", job: "Lead", salary: 2900, deptno: 40},
    {empno: 7167015, ename: "NBA-O", job: "Programmer", salary: 1900, deptno: 40},
    {empno: 7167016, ename: "NBA-P", job: "Tester", salary: 900, deptno: 40}
  ];

  getData() {
    this.minRange = this.min;
    this.maxRange = this.max;
  }
}
