
import { DashboardService } from './dashboard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { LoginService } from './login.service';
// import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {JwtModule} from '@auth0/angular-jwt';
import * as HighCharts from 'highcharts'
import { ModeComponent } from './mode/mode.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { StatusValidDirective } from './status-valid.directive';
import {CountriesService} from './countries.service';
import { AlertDirective } from './alert.directive';
import { RepeaterDirective } from './repeater.directive';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';

//import { ComponentLoaderDirective } from './component-loader.directive';







// import { ProjectComponent } from './project/project.component'



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    SignupComponent,
    AlertDirective,
    RepeaterDirective,    
    ModeComponent, GridComponent,
    

  
    
   
    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents(null),
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter:()=>{
    //       return(sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUser")).token:
    //       null)
    //     }
    //   }
    // })
  ],
  providers: [LoginService,
    DashboardService,
    CountriesService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
