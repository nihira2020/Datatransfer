import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { HomeComponent } from './home/home.component';
import { MychartComponent } from './mychart/mychart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeComponent,
    HomeComponent,
    MychartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
