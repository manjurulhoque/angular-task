import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-create-student",
    templateUrl: "./create-student.component.html",
    styleUrls: ["./create-student.component.css"]
})
export class CreateStudentComponent implements OnInit {
    myform: FormGroup;

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.titleService.setTitle("Create student");
        this.createForm();
    }

    createForm() {
        this.myform = new FormGroup({
            name: new FormControl("", [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(255)
            ]),
            email: new FormControl("", [Validators.required, Validators.email])
        });
    }

    onSubmit() {
        console.log(this.myform.get("name").value);
        if (this.myform.valid) {
            // this.blogService.createPost(
            //     this.title.value,
            //     this.description.value
            // );
            // this.myform.reset();
            // this.router.navigateByUrl("/");
        }
    }
}
