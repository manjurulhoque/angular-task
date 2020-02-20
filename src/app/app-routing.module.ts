import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllStudentsComponent } from "./pages/all-students/all-students.component";
import { CreateStudentComponent } from "./pages/create-student/create-student.component";
import { EditStudentComponent } from "./pages/edit-student/edit-student.component";

const routes: Routes = [
    {
        path: "",
        component: AllStudentsComponent
    },
    {
        path: "students/create",
        component: CreateStudentComponent
    },
    {
        path: "students/edit/:id",
        component: EditStudentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
