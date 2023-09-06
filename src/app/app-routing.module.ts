import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterEmployersComponent } from './register/register-employers/register-employers.component';
import { RegisterUserComponent } from './register/register-user/register-user.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginEmployersComponent } from './login/login-employers/login-employers.component';
import { JobComponent } from './job/job.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { EmployersComponent } from './employers/employers.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register-employers', component:RegisterEmployersComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'login-user',component:LoginUserComponent},
  {path:'login-employers',component:LoginEmployersComponent},
  {path:'job',component:JobComponent},
  {path:'search',component:SearchComponent},
  {path:'user',component:UserComponent},
  {path:'employers',component:EmployersComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
