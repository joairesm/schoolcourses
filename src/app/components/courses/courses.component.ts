import { Component } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { Course } from 'src/app/models/course';
import { courses } from 'src/app/models/courses';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

    filter: Filter;
    courses: Course[];

    constructor(){
        this.courses = courses;
    }

    onFilterChanged(filter: Filter){
        this.filter = filter;
    }
}
