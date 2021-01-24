import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit {


  @Input() value: any;

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        type:'category',
        labels:['','your situation','']
      }],
      yAxes: [{
        ticks: {
          min:0,
          max:100,
          stepSize:2,

          callback: function(value, index, values) {
            if (value==64 ){
              return 'bad' + value;
            }
            return '' + value;
        }
        }
        
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartColors = ''
  public bubblecolor =""
  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
      //  { x: 15, y: 15, r: 15 },
      //  { x: 25, y: 15, r: 25 },
        {x:'your situation', y: 12, r: 20  }
        
       // { x: 10, y: 18, r: 18 },
       
      ],
      backgroundColor:'rgba(0, 0, 0, 0.1)',
      label: 'Investment Equities',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value<48)
      this.bubblecolor= "green";
    else if (this.value<64 && this.value>48)
      this.bubblecolor= "yellow";
    else 
     this.bubblecolor = "red";


    this.bubbleChartData =[
      { data: [{x:'your situation', y: this.value, r: 20  }], label: 'your situation',
      backgroundColor: [this.bubblecolor]
    
    }
    ];
  }

}
