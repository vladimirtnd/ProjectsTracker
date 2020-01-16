import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimerComponent } from './timer/timer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ProjectsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
