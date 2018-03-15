import { Lesson } from './../models/lesson';
import { Observable } from 'rxjs/Observable';
import { LessonsService } from './../services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons$: Observable<Lesson[]>;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessons$ = this.lessonsService.loadAllLessons();
  }

}
