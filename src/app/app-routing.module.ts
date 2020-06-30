import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { AdviceComponentComponent } from './advice-component/advice-component.component';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'advice-component',component:AdviceComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
