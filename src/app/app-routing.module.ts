import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {StudentComponent} from './components/student/student.component';
const routes: Routes = [
  {
    path: 'User', 
    component: UserComponent,
  },
  {
    path: 'Student', 
    component: StudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
