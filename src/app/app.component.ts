import { Component, OnInit } from '@angular/core';
import { employeeData, columns } from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rows: any = employeeData;
  columns: any = columns;

  ngOnInit() {}

  isTreeColumn(columnLabel) {
    if (columnLabel === 'name') {
      return true;
    }
  }

  onTreeAction(event: any) {
    console.log(event);
  }
}
