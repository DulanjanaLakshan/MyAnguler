import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPanalComponent } from './components/input-panal/input-panal.component';
import { LoginPanalComponent } from './components/login-panal/login-panal.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'movies',component: LoginPanalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
