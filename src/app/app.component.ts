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

  ngOnInit() {
    this.rows.map((item) => {
      item.collapsed = true;
      item.teamMembers.filter((teamMember) => {
        teamMember.nestedTable = true;
      });
    });
  }

  isTreeColumn(columnLabel) {
    if (columnLabel === 'name') {
      return true;
    }
  }

  onTreeAction(event: any) {
    const currentRow = event.row;
    const nestedMembers = currentRow.teamMembers;
    this.rows.map((item, index) => {
      if (item.id === currentRow.id) {
        if (item.collapsed) {
          this.rows.splice(index + 1, 0, ...nestedMembers);
          item.collapsed = false;
        } else if (!item.collapsed) {
          this.rows.splice(index + 1, nestedMembers.length);
          item.collapsed = true;
        }
      }
    });
    this.rows = JSON.parse(JSON.stringify(this.rows));
    console.log(this.rows);
  }

  getRowClass(row) {
    return {
      nestedTable: row.nestedTable === true,
      expandedRow: row.collapsed === false,
      collapsedRow: row.collapsed === true,
    };
  }
}
