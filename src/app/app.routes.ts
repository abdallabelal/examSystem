import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ForgetpasswordComponent } from './Pages/Auth/forgetpassword/forgetpassword.component';
import { ResgisterComponent } from './Pages/Auth/resgister/resgister.component';
import { ExamhomeComponent } from './Pages/examhome/examhome.component';

export const routes: Routes = [

      { path: '', redirectTo: 'login', pathMatch: 'full' },



  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
    {
    path: 'forgetpassword',
    title: 'Forget Password',
    component: ForgetpasswordComponent,
  },

  {
    path: 'register',
    title: 'Register',
    component: ResgisterComponent,
  },

  {
    path: 'examhomepage',
    title: 'examhomepage',
    component: ExamhomeComponent,
  },
  {
    path: '**',
    redirectTo: 'homepage',
  },
];
