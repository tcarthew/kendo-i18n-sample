import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'kendo-i18n-sample';
  data = [
    { Id: 1, Name: 'Test 1', Description: 'Test Data' },
    { Id: 2, Name: 'Test 2', Description: 'Test Data' },
    { Id: 3, Name: 'Test 3', Description: 'Test Data' },
    { Id: 4, Name: 'Test 4', Description: 'Test Data' },
    { Id: 5, Name: 'Test 5', Description: 'Test Data' },
    { Id: 6, Name: 'Test 6', Description: 'Test Data' },
    { Id: 7, Name: 'Test 7', Description: 'Test Data' },
    { Id: 8, Name: 'Test 8', Description: 'Test Data' },
    { Id: 9, Name: 'Test 9', Description: 'Test Data' },
    { Id: 10, Name: 'Test 10', Description: 'Test Data' },
  ]
  gridData: GridDataResult;
  skip = 0;
  pageSize = 5;

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadData();
  }

  loadData(){
    this.gridData = {
      data: _.slice(this.data, this.skip, this.pageSize + this.skip),
      total: this.data.length
    }
  }

  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.loadData(); 
  }
}
