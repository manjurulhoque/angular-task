import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Student } from "src/app/models/Student";

@Component({
    selector: "app-edit-student",
    templateUrl: "./edit-student.component.html",
    styleUrls: ["./edit-student.component.css"]
})
export class EditStudentComponent implements OnInit {
    student: any = {};
    id: any;

    constructor(
        private activeRoute: ActivatedRoute,
        private titleService: Title,
        private studentService: StudentService,
        private router: Router
    ) {}

    ngOnInit() {
        this.titleService.setTitle("Edit student");
        this.activeRoute.params.subscribe(params => {
            if (params["id"]) {
                this.id = params["id"];
                this.studentService.getStudent(params["id"]).subscribe(res => {
                    this.student = res.student;
                });
            }
        });
    }

    onSubmit() {
        const updatedStudent: Student = {
            name: this.student.name,
            email: this.student.email,
            phone: this.student.phone,
            roll: this.student.roll,
            cls: this.student.cls,
            address: this.student.address
        } as Student;

        console.log(updatedStudent);

        this.studentService
            .updatedStudent(this.id, updatedStudent)
            .subscribe(res => {
                console.log(res);
                this.router.navigateByUrl("/");
            });
    }
}
