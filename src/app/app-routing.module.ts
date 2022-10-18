import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstcompComponent } from './datacommunication/firstcomp/firstcomp.component';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { SecondcompComponent } from './datacommunication/secondcomp/secondcomp.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SampletextComponent } from './sampletext/sampletext.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'staff/:id/:name', component: StaffComponent,},
  {path:'stud', component: StudentComponent ,canActivate:[AuthGuard]},
  {path:'contact', component: ContactusComponent,resolve:[AuthGuard]},
  {path:'parent',component:ParentComponent},
  {path:'first',component:FirstcompComponent},
  {path:'second',component:SecondcompComponent},
{path:'sampletext',component:SampletextComponent},
  {path:'ug',loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UGModule)},
  {path:'pg',loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PGModule)},
  {path:'**', component: ErrorComponent}

  // {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// <div class="container mt-3">
//     <h2>Parent Component</h2>
//     <div class="card">
//         <div class="card-header">Header</div>
//         <div class="card-body">Content</div>
//         <div class="card-footer">Footer</div>
//     </div>
// </div>