import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import{  HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { ChildComponent } from './datacommunication/parent/child/child.component';
import { FirstcompComponent } from './datacommunication/firstcomp/firstcomp.component';
import { SecondcompComponent } from './datacommunication/secondcomp/secondcomp.component';
import { SampletextComponent } from './sampletext/sampletext.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    StudentComponent,
    ContactusComponent,
    ErrorComponent,
    ParentComponent,
    ChildComponent,
    FirstcompComponent,
    SecondcompComponent,
    SampletextComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
