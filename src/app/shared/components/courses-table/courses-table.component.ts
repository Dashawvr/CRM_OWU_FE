import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';

import {Course} from '../../types';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['index', 'name', 'price', 'createdAt', 'updatedAt', 'delete'];

  @Input()
  data: Course[] = [];

  @Output()
  deleteCourseEvent = new EventEmitter<number>();

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  delete(id: number): void {
    this.deleteCourseEvent.emit(id);
  }
}
