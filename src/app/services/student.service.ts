import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "../models/Student";

@Injectable({
    providedIn: "root"
})
export class StudentService {
    private BASE_URL = "http://127.0.0.1:8000/";

    constructor(private http: HttpClient) {}

    getAllStudents() {
        return this.http.get<any>(this.BASE_URL);
    }

    createStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(this.BASE_URL, student);
    }

    getStudent(id: any): Observable<any> {
        return this.http.get<any>(this.BASE_URL + "/" + id);
    }

    updatedStudent(id: any, newStudent: Student): Observable<Student> {
        return this.http.put<Student>(this.BASE_URL + "/" + id, newStudent);
    }

    deleteStudent(id: any) {
        return this.http.delete(this.BASE_URL + "/" + id);
    }
}
