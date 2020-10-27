import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {EMPTY, merge, of} from 'rxjs';

import {Course, CourseParams, ServerData} from '../../shared/types';
import {CourseCreateFormDialogComponent} from '../../shared/entryComponents/course-create-form-dialog/course-create-form-dialog.component';
import {Logger, SnackBarService} from '../../core/services';
import {CoursesService} from './services/courses.service';
import {untilDestroyed} from '../../core';
import {CreateMessage} from '../../shared/constants';
import {CoursesTableComponent} from '../../shared/components/courses-table/courses-table.component';

const log = new Logger('Course');

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy, AfterViewInit {

  fruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  data: Course[] = [];
  resultsLength = 0;


  @ViewChild(CoursesTableComponent) table: CoursesTableComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getDataFromResolver();
  }

  ngAfterViewInit(): void {
    this.paginatorOrSortOnChange();
  }

  ngOnDestroy(): void {
  }

  get courseParams(): CourseParams {
    return {
      sort: this.table.sort.active,
      order: this.table.sort.direction,
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    };
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CourseCreateFormDialogComponent, {
      disableClose: true
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(value => value),
        switchMap(course => this.coursesService.save(course)),
        untilDestroyed(this)
      )
      .subscribe(() => this.snackBarService.successMessage(CreateMessage.COURSE));
  }

  private getDataFromResolver(): void {
    this.route.data
      .pipe(
        map<{ serverData: ServerData<Course> }, Course[]>(({serverData}) => {
          this.resultsLength = serverData.count;
          return serverData.rows;
        }),
        catchError(() => EMPTY),
        untilDestroyed(this)
      )
      .subscribe(courses => this.data = courses);
  }

  private paginatorOrSortOnChange(): void {
    merge(this.table.sort.sortChange, this.paginator.page)
      .pipe(
        switchMap(() => this.coursesService.getAll(this.courseParams)),
        map<ServerData<Course>, Course[]>(data => {
          this.resultsLength = data.count;
          return data.rows;
        }),
        catchError(() => of([])),
        untilDestroyed(this)
      ).subscribe(courses => this.data = courses);
  }

  delete(id: number): void {
    this.coursesService
      .delete(id)
      .subscribe();
  }
}
