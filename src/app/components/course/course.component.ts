import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent {

    @Input() course: Course;

    imgSource= "https://www.wesleyan.edu/libr/friends/images/homepage/book.jpg";

}
