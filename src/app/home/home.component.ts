import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { pipe } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PafcalculateService } from '../services/pafcalculate.service';
import { TnfAlphacalculateService } from '../services/tnf-alphacalculate.service';
import { Il10calculateService } from '../services/il-10calculate.service';
import { IlOnebetacalculateService } from '../services/il-onebetacalculate.service';
import { SipcalculateService } from '../services/sipcalculate.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Color } from 'ng2-charts';
import * as annotations from 'chartjs-plugin-annotation';
import * as data from '../../assets/img/data.json';
import { ThemeService } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {  BaseChartDirective.registerPlugin(annotations);}
  precentage ;
  pafservice:PafcalculateService;
  tnfalphaservice :TnfAlphacalculateService;
  il10service:Il10calculateService;
  ilonebetaservice:IlOnebetacalculateService;
  sipcalculate :SipcalculateService;
  haserror:boolean= true;
  errorform:any;

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
  vulnerability2:any=40;
  isSubmit :boolean =false;

  severbool :any;
  notseverbool:any;
  safebool:any;

  products:any = (data as any).default;






  public lineChartData: ChartDataSets[]=[
    { data: []}
  ] ;
  public lineChartLabels: string[] = ['', 'x', ''];
  public lineChartOptions= {
    type: 'line',
    scales: {
      xAxes: [{
        position: 'bottom',
        gridLines: {
          zeroLineColor: "rgba(0,255,0,1)"
        },
        scaleLabel: {
          display: true,
          labelString: ''
        },
      }],
      yAxes: [{
        position: 'left',
        gridLines: {
          zeroLineColor: "rgba(0,255,0,1)"
        },
        scaleLabel: {
          display: true,
          labelString: 'Unfavourability level'
        },
      }]
    },
    responsive: true,
    annotation: {
      annotations: [
        {
          type: 'box',
          display: true,

          // optional drawTime to control layering, overrides global drawTime setting.
          drawTime: 'beforeDatasetsDraw',
          borderDashOffset: 5,
          
          borderWidth: 2, 
          // ID of the Y scale to bind onto, default is 'y'.
          yScaleID: 'y-axis-0',
          yMax: 36,

          // Bottom edge of the box.
          yMin:  0,
          backgroundColor: 'rgb(245, 27, 27)',
          
        },
        {
          type: 'box',
          display: true,

          // optional drawTime to control layering, overrides global drawTime setting.
          drawTime: 'beforeDatasetsDraw',
          borderDashOffset: 5,
          
          borderWidth: 2, 
          // ID of the Y scale to bind onto, default is 'y'.
          yScaleID: 'y-axis-0',
          yMax:51 ,

          // Bottom edge of the box.
          yMin:  36,
          backgroundColor: 'rgb(243, 243, 73)',
          

          
        },
        {
          type: 'box',
          display: true,

          // optional drawTime to control layering, overrides global drawTime setting.
          drawTime: 'beforeDatasetsDraw',
          borderDashOffset: 5,
          
          borderWidth: 2, 
          // ID of the Y scale to bind onto, default is 'y'.
          yScaleID: 'y-axis-0',
          yMax: 100,

          // Bottom edge of the box.
          yMin:  51,
          backgroundColor: 'rgb(34, 238, 34)',
          
        },
      ],
    },
  };
  public lineChartColors: Color[] = [

  ];
  public lineChartLegend = true;
  public lineChartType = 'line';






  ngOnInit(): void {
      this.products.forEach(element => {
        console.log(element.a+element.b+element.c+element.d+element.e)
      });;
    
  }

  onsubmit(form:NgForm){
    console.log(form.value.feild1);
    console.log(form.value.feild2);
    this.precentage=(form.value.feild1 + form.value.feild2+ form.value.feild3 + form.value.feild4 + form.value.feild5);

    let paf:boolean;
    let alpha:boolean; 
    let beta:boolean;
    let sip:boolean;
    let il10:boolean;
    if( form.value.feild1 < 0 || form.value.feild1> 2000){
      this.haserror = false;
      this.errorform = "Paf level should be between 0 -2000"
      this.isSubmit = false;
    } 
    else{
      paf = true;
    }
   if(form.value.feild2 < 0 || form.value.feild2> 500){
      this.haserror = false;
      this.errorform = "Tnf alpha level should be between 0 -500"
      this.isSubmit = false;
    
    }  else{
      alpha= true
    }
    
    
    if(form.value.feild3 < 0 || form.value.feild3> 1000){
      this.haserror = false;
      this.errorform = "il10 level should be between 0 -1000"
      this.isSubmit = false;
    
    }
    else{
      il10 = true;
    }
    
    if(form.value.feild4 < 0 || form.value.feild4> 500){
      this.haserror = false;
      this.errorform = "il-B level should be between 0 -500"
      this.isSubmit = false;
    
    }
    else {
      beta =true
    }
    
    
    if(form.value.feild5 < 0 || form.value.feild5> 10){
      this.haserror = false;
      this.errorform = "sip level should be between 0 -10"
      this.isSubmit = false;
    }else{
      sip = true
    }

    if(sip && alpha && beta && il10 && paf ){
      this.haserror = true;
    }

    if(this.haserror){
      
      

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
    if(isNaN( this.h)){
      this.h = 0;
    }
    if (isNaN(this.h2)){
      this.h2=0;
    }
    if(isNaN(this.h1)){
      this.h1 = 0;
    }
    this.owa= this.calculateowa(this.h1,this.h2);

    this.vulnerability = this.owa*100 ;
    // if (this.vulnerability <= 100 && this.vulnerability >=0){
     this.vulnerability= this.vulnerability.toFixed(2);
     
    // }else{
    //   this.vulnerability= 40
    // }

    if(isNaN(this.vulnerability)){
      this.vulnerability = 40;
    }
     


    if(this.vulnerability <=36){
      this.severbool = true;
      this.notseverbool =false;
      this.safebool = false;
    } else if(this.vulnerability>36 && this.vulnerability <=51){
      this.notseverbool = true;
      this.severbool = false;
      this.safebool = false;
    }else{
      this.safebool= true;
      this.notseverbool = false;
      this.severbool = false;
    }



    console.log(this.h1,"H1");
    console.log(this.h2,"H2")
    console.log(this.h,"H")

    console.log(this.vulnerability ,"vulnerability")
    this.lineChartData = [
      {
        type: 'bubble',
        label: 'Line Dataset',
        data: [{x:'x', y:this.vulnerability, r: 16 }],
        backgroundColor: [
          'black',
          
      ],
      borderColor: [
          'black'
      ],
      borderWidth: 1
      
  
      }
     
    ];

    this.isSubmit = true;
  }
  
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

  public ResetForm(form:NgForm){
    form.reset();
    this.isSubmit= false;
  }
}
