import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StudentComponent } from './components/student/student.component';
import { StudentItem } from './models/student-item.cs/student-item.cs.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CourseComponent } from './components/course/course.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StudentComponent,
    StudentItem.CsComponent,
    TeacherComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
