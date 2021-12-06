import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-line-series-chart',
  templateUrl: './line-series-chart.component.html',
  styles: [
  ]
})
export class LineSeriesChartComponent implements OnInit {

  constructor() { }

  baseUrl: string = environment.production ? "http://gcassin2022-001-site1.etempurl.com/api/charts/lineseries" : "https://localhost:44344/api/charts/lineseries";
    // baseUrl: string = environment.baseUrl + 'charts/lineseries';
    
    public primaryXAxis: Object;
    public chartData: Object[];
    public primaryYAxis: Object;
    public legendSettings: Object;
    public tooltip: Object;
    public title: string;
    public titleStyle: Object;
    public marker: Object;
    public dataManager: DataManager = new DataManager({
        url: this.baseUrl
    });
    ngOnInit(): void {
        this.tooltip = {
            enable: true
        }
        this.dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
            this.chartData = e.result as object[];
        }).catch((e) => true);
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months',
            labelFormat: 'c0',
            labelRotation : -45
        };
        this.primaryYAxis = {
            labelFormat: '${value}k',
            title: 'Sales'
        };
        this.marker = {
            dataLabel: {
                visible: false
            }
        };
        this.legendSettings = {
            visible: true
        };

        this.title = 'Line Series Chart';
        this.titleStyle = {
            fontFamily: "Arial",
            fontWeight: 'regular',
            color: "sandybrown",
            size: '24px'
          }
    }

}
