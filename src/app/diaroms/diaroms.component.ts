import { R3TargetBinder } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: 'app-diaroms',
  templateUrl: './diaroms.component.html',
  styleUrls: ['./diaroms.component.css']
})


export class DiaromsComponent implements OnChanges {
  barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      xAxes:[{
        type:'linear'
      }]
    }
  };

  @Input() valuealpha: any;
  @Input() valuepaf: any;
  @Input()  il10:any ;
  @Input() ilb:any;
  @Input() sip:any;

  //common for all 
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartPlugins = [];

  //for the alpha level
  

  barChartData: ChartDataSets[] = [
    { data: []}
  ];


  // alpha level ends

  //for the paf level


  barChartDatapaf: ChartDataSets[] = [
    { data: []}
  ];


  // paf level ends

  //il10 level begins

  
  barChartDatail10:ChartDataSets[]=[
    {data:[]}
  ];
  //il10 level ends


  //ilb level begins

  barChartDatailb:ChartDataSets[]=[
    {data:[]}
  ];
// ilb level ends


//sip level begins 

barChartDatasip:ChartDataSets[]=[
  {data:[]}
];

// sip level ends






  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    // this is for alpha level input graphh
    console.log(this.valuealpha.toFixed(1))
    let alphay = this.valuealpha + 0.5
    if(this.valuealpha==1){
      alphay = 12.5
    }else if(this.valuealpha ==0){
      alphay = 32.5;
    }else{
      alphay = 30-15*this.valuealpha;
    }
    
    console.log(this.valuealpha)
    if(isNaN(this.valuealpha)){
      this.valuealpha = 1;
      alphay = 12.5;
    }
   
    this.barChartData =[
      {
        type:'line',
        data:[{x:10,y:1},{x:15,y:1},{x:30,y:0},{x:35,y:0}], 
        label: 'your situation',
      //backgroundColor: ["#99ff99", '#FFFF66', "#666600", "yellow", "red"]
    
    },{
      type: 'bubble',
      label: 'Line Dataset',
      data: [{x:alphay, y:this.valuealpha, r: 16 }],

    }
    ];
    // end alpha level input graph


    // pafchart beginss
    let pafy;
    console.log(this.valuepaf)
    if (this.valuepaf==1){
      pafy = 10;
      
    }else if(this.valuepaf == 0){
      pafy = 100;
    }else{
      pafy = 100-(90*this.valuepaf.toFixed(2))
    }


    this.barChartDatapaf =[
      {
        type:'line',
        data:[{x:0,y:1},{x:10,y:1},{x:100,y:0},{x:120,y:0}], 
        label: 'your situation',
      //backgroundColor: ["#99ff99", '#FFFF66', "#666600", "yellow", "red"]
    
    },{
      type: 'bubble',
      label: 'Line Dataset',
      data: [{x:pafy, y:this.valuepaf, r: 15 }],

    }
    ];

    // pafchart ends


    // il10 charts starts

    
    let il10y ;

    if (this.il10 == 1){
      il10y = 20;
    }else if(this.il10 ==0){
      il10y=110;
    }else{
      il10y= 110-(this.il10*90)
    }
    
    this.barChartDatail10 =[
      {
        type:'line',
        data:[{x:0,y:1},{x:20,y:1},{x:110,y:0},{x:120,y:0}], 
        label: 'your situation',
      //backgroundColor: ["#99ff99", '#FFFF66', "#666600", "yellow", "red"]
    
    },{
      type: 'bubble',
      label: 'Line Dataset',
      data: [{x:il10y, y:this.il10, r: 16 }],

    }
    ];

    // il10 chart ends

    //ilb chart begins

    let ilbx;
    if(this.ilb==1){
      ilbx= 30.5
    }else if(this.ilb ==0){
      ilbx = 33.5
    }else{
      ilbx = 33.5- this.ilb*3
    }
    this.barChartDatailb=[
      {
        type:'line',
        data:[{x:30,y:1},{x:30.5,y:1},{x:33.5,y:0},{x:34,y:0}], 
        label: 'your situation',
      //backgroundColor: ["#99ff99", '#FFFF66', "#666600", "yellow", "red"]
    
    },{
      type: 'bubble',
      label: 'Line Dataset',
      data: [{x:ilbx, y:this.ilb, r: 16 }],

    }
    ];


    //ilb charts endsl
    //sip chart begins 


    
    let sipx;
    if(this.sip==1){
      sipx =1.5
    }else if(this.sip==0){
      sipx= 0.5
    }else {
      sipx = this.sip +0.5
    }
    this.barChartDatasip=[
      {
        type:'line',
        data:[{x:0.4,y:0},{x:0.5,y:0},{x:1.5,y:1},{x:1.6,y:1}], 
        label: 'your situation',
      //backgroundColor: ["#99ff99", '#FFFF66', "#666600", "yellow", "red"]
    
    },{
      type: 'bubble',
      label: 'Line Dataset',
      data: [{x:sipx, y:this.sip, r:16 }],

    }
    ];

    //sip chart ends





  }

}
