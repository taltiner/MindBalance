import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormField} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {AdapterService} from "./adapter/adapter.service";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {AuthInterceptor} from "./service/auth-interceptor.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DailyCheckinComponent} from "./daily-checkin/daily-checkin.component";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'daily-checkin', component: DailyCheckinComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DailyCheckinComponent
  ],
  imports: [
    BrowserModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatCardModule,
    MatButton,
    MatSlider,
    FormsModule,
    MatSliderThumb,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatStepperNext,
    MatButtonModule,
    MatStepperPrevious
  ],
  providers: [
    AdapterService,
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
