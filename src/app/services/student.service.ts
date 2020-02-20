import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class StudentService {
    private BASE_URL = "http://127.0.0.1:8000/";

    constructor(private http: HttpClient) {}

    getAllStudents() {
        return this.http.get<any>(this.BASE_URL);
    }
}
