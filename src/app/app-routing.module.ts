import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { AdviceComponentComponent } from './advice-component/advice-component.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutpredictComponent } from './aboutpredict/aboutpredict.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';
import { DiaromsComponent } from './diaroms/diaroms.component';
import { ChartsModule } from 'ng2-charts';
import { AboutalgorithmComponent } from './aboutalgorithm/aboutalgorithm.component';

import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { ChangelanComponent } from './changelan/changelan.component';

const routes: Routes = [

  {path:'sycotine_prediction',component:HomeComponent},
  {path:'advice-component',component:AdviceComponentComponent},
  {path:'home',component:FirstpageComponent}
  ,{
    path:'aboutpredict',component:AboutpredictComponent
  },
  {
    path:'finddoctor',component:FinddoctorComponent
  },
  {
    path:'diagrom',component:DiaromsComponent
  },
  {
    path:'aboutalgorithm',component:AboutalgorithmComponent
  },
  {
    path:'bublechart',component:BubblechartComponent
  },
  {
    path:'changelan',component:ChangelanComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
   // redirect to `first-component`
  //{ path: '**', component: 'home' },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
