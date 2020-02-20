import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Student } from "src/app/models/Student";

@Component({
    selector: "app-edit-student",
    templateUrl: "./edit-student.component.html",
    styleUrls: ["./edit-student.component.css"]
})
export class EditStudentComponent implements OnInit {
    myform: FormGroup;
    student: Student;
    id: any;

    constructor(
        private activeRoute: ActivatedRoute,
        private titleService: Title,
        private studentService: StudentService,
        private router: Router
    ) {}

    ngOnInit() {
        this.titleService.setTitle("Edit student");
        this.createForm();
        this.activeRoute.params.subscribe(params => {
            if (params["id"]) {
                this.id = params["id"];
                this.studentService.getStudent(params["id"]).subscribe(res => {
                    this.student = res.student;
                    console.log(this.student);
                    this.myform.patchValue({
                        name: this.student.name,
                        email: this.student.email,
                        phone: this.student.phone,
                        address: this.student.address,
                        roll: this.student.roll,
                        cls: this.student.cls
                    });
                });
            }
        });
    }

    createForm() {
        this.myform = new FormGroup({
            name: new FormControl("", [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(255)
            ]),
            email: new FormControl("", [Validators.required, Validators.email]),
            phone: new FormControl("", [
                Validators.required,
                Validators.minLength(11)
            ]),
            roll: new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            cls: new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            address: new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ])
        });
    }

    onSubmit() {
        if (this.myform.valid) {
            const updatedStudent: Student = {
                name: this.myform.get("name").value,
                email: this.myform.get("email").value,
                phone: this.myform.get("phone").value,
                roll: this.myform.get("roll").value,
                cls: this.myform.get("cls").value,
                address: this.myform.get("address").value
            } as Student;

            this.studentService
                .updatedStudent(this.id, updatedStudent)
                .subscribe(res => {
                    console.log(res);
                });
            this.myform.reset();
            this.router.navigateByUrl("/");
        }
    }
}
