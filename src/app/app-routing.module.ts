import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard } from './route.guard';

const routes: Routes = [
  {
    path : '',
    pathMatch:'full',
    redirectTo:'/login',
  },  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'blog',
    canActivate:[RouteGuard],
    component:BlogComponent
  },
  {
    path:'admin-blog',
    canActivate:[RouteGuard],
    component:AdminBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
