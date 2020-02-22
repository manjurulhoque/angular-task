import { Component, OnInit } from "@angular/core";
import { Student } from "./../../models/Student";
import { StudentService } from "src/app/services/student.service";

@Component({
    selector: "app-all-students",
    templateUrl: "./all-students.component.html",
    styleUrls: ["./all-students.component.css"]
})
export class AllStudentsComponent implements OnInit {
    students: Student[];

    constructor(private studentService: StudentService) {}

    ngOnInit() {
        this.getAllStudents();
    }

    getAllStudents() {
        this.studentService.getAllStudents().subscribe(res => {
            this.students = res;
            //console.log(res);
        });
    }

    deleteStudent(id: any) {
        this.studentService.deleteStudent(id).subscribe(res => {
            console.log(res);
        });
    }
}
