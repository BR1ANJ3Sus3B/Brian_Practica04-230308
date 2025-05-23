import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { DataTablesResponse } from '../../datatables-response.model';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.css'
})
export class AjaxComponent implements OnInit {
  dtOptions: Config = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        that.http.post<DataTablesResponse>(
          'https://xtlncifojk.eu07.qoddiapp.com/',
          dataTablesParameters
        ).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        });
      },
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'First name', data: 'firstName' },
        { title: 'Last name', data: 'lastName' }
      ]
    };
  }
}
