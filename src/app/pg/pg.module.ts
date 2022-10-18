import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgstudentComponent } from './pgstudent/pgstudent.component';
import { PgadmissionComponent } from './pgadmission/pgadmission.component';
import { PghomeComponent } from './pghome/pghome.component';
import { RouterModule, Routes } from '@angular/router';
import {CardModule} from 'primeng/card';

const route: Routes=[
  {path:'', component: PghomeComponent },
  {path:'pgstaff', component: PgstaffComponent},
  {path: 'pgstud', component: PgstudentComponent},
  {path: 'pgadmission', component: PgadmissionComponent}
]


@NgModule({
  declarations: [
    PgstaffComponent,
    PgstudentComponent,
    PgadmissionComponent,
    PghomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(route)
    
  ]

})
export class PGModule { }
