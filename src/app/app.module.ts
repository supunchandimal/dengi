import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AdviceComponentComponent } from './advice-component/advice-component.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutpredictComponent } from './aboutpredict/aboutpredict.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';
import { DiaromsComponent } from './diaroms/diaroms.component';
import { ChartsModule } from 'ng2-charts';
import { AboutalgorithmComponent } from './aboutalgorithm/aboutalgorithm.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { ChangelanComponent } from './changelan/changelan.component';

   


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    AdviceComponentComponent,
    FirstpageComponent,
    AboutpredictComponent,
    FinddoctorComponent,
    DiaromsComponent,
    AboutalgorithmComponent,
    BubblechartComponent,
    ChangelanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
