import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {EMPTY} from 'rxjs';

import {Course, ServerData} from '../../shared/types';
import {CourseCreateFormDialogComponent} from '../../shared/entryComponents/course-create-form-dialog/course-create-form-dialog.component';
import {Logger, SnackBarService} from '../../core/services';
import {CoursesService} from './services/courses.service';
import {untilDestroyed} from '../../core';
import {CreateMessage} from '../../shared/constants';

const log = new Logger('Course');

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['index', 'name', 'price', 'createdAt', 'updatedAt', 'delete'];
  data: Course[] = [];
  resultsLength = 0;

  fruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDataFromResolver();
    this.pageOnChange();
  }

  ngOnDestroy(): void {
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

  private pageOnChange(): void {
    this.paginator.page.subscribe(res => {
      console.log(res);
    });
  }
}
