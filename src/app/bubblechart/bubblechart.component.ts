import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Color } from 'ng2-charts';
import * as annotations from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnChanges {
  

@Input() value:any ;
 

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

  constructor() {
    BaseChartDirective.registerPlugin(annotations);
  }



  ngOnChanges(changes: SimpleChanges): void {
    if(this.value = undefined){
      this.value = 0;
    }
    console.log(this.value)

    this.value=50;
    this.lineChartData = [
      {
        type: 'bubble',
        label: 'Line Dataset',
        data: [{x:'x', y:this.value, r: 16 }],
        backgroundColor: [
          'black',
          
      ],
      borderColor: [
          'black'
      ],
      borderWidth: 1
      
  
      }
     
    ];

  }

}
