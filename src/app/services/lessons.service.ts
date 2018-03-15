import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Lesson } from '../models/lesson';


@Injectable()
export class LessonsService {

    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    loadAllLessons() {
        return this.http.get<Lesson[]>(this.baseUrl + 'lessons');
    }
}
