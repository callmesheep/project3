import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { JobComponent } from './job/job.component';
import { RegisterRecruitmentsComponent } from './register-recruitments/register-recruitments.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterUserComponent } from './register/register-user/register-user.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginEmployersComponent } from './login/login-employers/login-employers.component';
import { RegisterEmployersComponent } from './register/register-employers/register-employers.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    JobComponent,
    RegisterRecruitmentsComponent,
    HeaderComponent,
    FooterComponent,
    RegisterUserComponent,
    LoginUserComponent,
    LoginEmployersComponent,
    RegisterEmployersComponent,
    UserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
