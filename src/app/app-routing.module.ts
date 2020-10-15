import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { AdviceComponentComponent } from './advice-component/advice-component.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutpredictComponent } from './aboutpredict/aboutpredict.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';

const routes: Routes = [

  {path:'sycotine_prediction',component:HomeComponent},
  {path:'advice-component',component:AdviceComponentComponent},
  {path:'home',component:FirstpageComponent}
  ,{
    path:'aboutpredict',component:AboutpredictComponent
  },
  {
    path:'finddoctor',component:FinddoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
