import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { pipe } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PafcalculateService } from '../services/pafcalculate.service';
import { TnfAlphacalculateService } from '../services/tnf-alphacalculate.service';
import { Il10calculateService } from '../services/il-10calculate.service';
import { IlOnebetacalculateService } from '../services/il-onebetacalculate.service';
import { SipcalculateService } from '../services/sipcalculate.service';

import * as data from '../../assets/img/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  precentage ;
  pafservice:PafcalculateService;
  tnfalphaservice :TnfAlphacalculateService;
  il10service:Il10calculateService;
  ilonebetaservice:IlOnebetacalculateService;
  sipcalculate :SipcalculateService;

  tnfalphalevel :number;
  pafincrementlevel:number;
  il10level :number;
  ilonebetalevel:number;
  siplevel:number;
  h1:any;
  h2:any;
  h:any;
  owa:any;
  vulnerability:any;
  isSubmit :boolean =false;

  products:any = (data as any).default;

  ngOnInit(): void {
      this.products.forEach(element => {
        console.log(element.a+element.b+element.c+element.d+element.e)
      });;
    
  }

  onsubmit(form:NgForm){
    console.log(form.value.feild1);
    console.log(form.value.feild2);
    this.precentage=(form.value.feild1 + form.value.feild2+ form.value.feild3 + form.value.feild4 + form.value.feild5);

    this.pafservice = new PafcalculateService();
    this.tnfalphaservice = new TnfAlphacalculateService();
    this.il10service = new Il10calculateService();
    this.ilonebetaservice = new IlOnebetacalculateService();
    this.sipcalculate  = new SipcalculateService()

    this.pafincrementlevel = this.pafservice.calculate(form.value.feild1);// feild one input for paf input

    console.log(this.pafincrementlevel ," pafin")
    this.tnfalphalevel = this.tnfalphaservice.calculate(form.value.feild2);// feild two input for tnf allpha

    console.log(this.tnfalphalevel,"tnfalpha")
    this.il10level = this.il10service.calculate(form.value.feild3);// feild three input for il10;
    console.log(this.il10level,"il10")
    this.ilonebetalevel = this.ilonebetaservice.calculate(form.value.feild4);// feild 4  input for ilone beta;
    console.log(this.ilonebetalevel,"beta")
    this.siplevel = this.sipcalculate.calculate(form.value.feild5);// feild 5 input for sip 
    console.log(this.siplevel,"sip")



    this.h1= this.calculatehH1(this.siplevel,this.ilonebetalevel);
    this.h = this.calculateH(this.il10level,this.tnfalphalevel);
    this.h2= this.calculateh2 (this.h, this.pafincrementlevel);
    this.owa= this.calculateowa(this.h1,this.h2);

    this.vulnerability = 100-this.owa*100;

    console.log(this.h1,"H1");
    console.log(this.h2,"H2")
    console.log(this.h,"H")

    console.log(this.vulnerability ,"vulnerability")


    this.isSubmit = true;
  }

  public calculatehH1(x,y){
    
    let a; 

    a = (x*y)/((x+y)-(x*y));
    return a ;
  }


  public calculateH(x, y){

    let a ;

    a= Math.pow(x,1.1)* Math.pow(y,1.1)/(Math.pow(x,1.1) +Math.pow(y,1.1)- Math.pow(x,1.1)* Math.pow(y,1.1));
    return a;
  }

  public calculateh2(h,p){
    let a ;
    // console.log(h1*Math.pow(p,1.2)+"gg")
    // console.log(h1+Math.pow(p,1.2)-h1*Math.pow(p,1.2));

    a = (h*Math.pow(p,1.2))/(h+Math.pow(p,1.2)-h*Math.pow(p,1.2));
    console.log(a,"fasd")
  
    return a;
  }

  public calculateowa(h1,h2){
    let owa;
    owa = 0.4 *Math.max(h1,h2)+0.6*Math.min(h1,h2);
    console.log(owa,"owa")
    return owa;
  }

}
