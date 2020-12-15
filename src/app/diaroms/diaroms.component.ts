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
  };

  @Input() value: any;
  barChartLabels: Label[] = ['Low Risk', 'midRisk', 'Your level', 'risk', 'High Risk'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: []}
  ];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.value)
    this.barChartData =[
      { data: [15,40, this.value, 60, 70 ], label: 'your situation',
      backgroundColor: ["green", "blue", "green", "yellow", "red"]
    
    }
    ];
  }

}
