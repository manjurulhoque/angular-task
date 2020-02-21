import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { StudentService } from "src/app/services/student.service";
import { Student } from "src/app/models/Student";

@Component({
    selector: "app-create-student",
    templateUrl: "./create-student.component.html",
    styleUrls: ["./create-student.component.css"]
})
export class CreateStudentComponent implements OnInit {
    myform: FormGroup;
    student: any = {};

    constructor(
        private titleService: Title,
        private router: Router,
        private studentService: StudentService
    ) {}

    ngOnInit() {
        this.titleService.setTitle("Create student");
    }

    // createForm() {
    //     this.myform = new FormGroup({
    //         name: new FormControl("", [
    //             Validators.required,
    //             Validators.minLength(2),
    //             Validators.maxLength(255)
    //         ]),
    //         email: new FormControl("", [Validators.required, Validators.email]),
    //         phone: new FormControl("", [
    //             Validators.required,
    //             Validators.minLength(11)
    //         ]),
    //         roll: new FormControl("", [
    //             Validators.required,
    //             Validators.minLength(3)
    //         ]),
    //         cls: new FormControl("", [
    //             Validators.required,
    //             Validators.minLength(3)
    //         ]),
    //         address: new FormControl("", [
    //             Validators.required,
    //             Validators.minLength(3)
    //         ])
    //     });
    // }

    onSubmit() {
        const newStudent: Student = {
            name: this.student.name,
            email: this.student.email,
            phone: this.student.phone,
            roll: this.student.roll,
            cls: this.student.cls,
            address: this.student.address
        } as Student;

        console.log(newStudent);

        this.studentService.createStudent(newStudent).subscribe(res => {
            console.log(res);
        });
        this.router.navigateByUrl("/");
    }
}
