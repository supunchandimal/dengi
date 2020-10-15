import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AdviceComponentComponent } from './advice-component/advice-component.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutpredictComponent } from './aboutpredict/aboutpredict.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    AdviceComponentComponent,
    FirstpageComponent,
    AboutpredictComponent,
    FinddoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
