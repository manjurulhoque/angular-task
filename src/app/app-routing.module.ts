import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllStudentsComponent } from "./pages/all-students/all-students.component";
import { CreateStudentComponent } from "./pages/create-student/create-student.component";

const routes: Routes = [
    {
        path: "",
        component: AllStudentsComponent
    },
    {
        path: "students/create",
        component: CreateStudentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
