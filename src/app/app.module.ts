import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AllStudentsComponent } from "./pages/all-students/all-students.component";
import { CreateStudentComponent } from "./pages/create-student/create-student.component";
import { EditStudentComponent } from './pages/edit-student/edit-student.component';

@NgModule({
    declarations: [
        AppComponent,
        AllStudentsComponent,
        HeaderComponent,
        CreateStudentComponent,
        EditStudentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
