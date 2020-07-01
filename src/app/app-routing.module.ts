import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { AdviceComponentComponent } from './advice-component/advice-component.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [

  {path:'sycotine_prediction',component:HomeComponent},
  {path:'advice-component',component:AdviceComponentComponent},
  {path:'home',component:FirstpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
