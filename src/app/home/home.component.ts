import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { pipe } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PafcalculateService } from '../services/pafcalculate.service';
import { TnfAlphacalculateService } from '../services/tnf-alphacalculate.service';
import { Il10calculateService } from '../services/il-10calculate.service';
import { IlOnebetacalculateService } from '../services/il-onebetacalculate.service';
import { SipcalculateService } from '../services/sipcalculate.service';

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


  ngOnInit(): void {
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
    this.tnfalphalevel = this.tnfalphaservice.calculate(form.value.feild2);// feild two input for tnf allpha
    this.il10level = this.il10service.calculate(form.value.feild3);// feild three input for il10;
    this.ilonebetalevel = this.ilonebetaservice.calculate(form.value.feild4);// feild 4  input for ilone beta;
    this.siplevel = this.sipcalculate.calculate(form.value.feild5);// feild 5 input for sip 

    console.log("incremnet");
    console.log(this.pafincrementlevel);
    console.log(this.tnfalphalevel);
    console.log(this.il10level);
    console.log(this.ilonebetalevel);
    console.log(this.siplevel)
    console.log("end");
    
  }

}
