import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProducthomebodyComponent } from './producthomebody/producthomebody.component';

const routes: Routes = [
  {path: '',component:SignupComponent},
  {path:'user/login',component:LoginComponent},
  {path: 'producthomebody', component:ProducthomebodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
