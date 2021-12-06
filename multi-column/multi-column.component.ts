import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multi-column',
  templateUrl: './multi-column.component.html',
  styles: [
  ]
})
export class MultiColumnComponent implements OnInit {

  constructor() { }

  public primaryXAxis: Object;
  public chartData: Object[];
  public title: string;
  public primaryYAxis: Object;
  public marker: Object;
  public legendSettings: Object;
  public tooltip: Object;
  public titleStyle: Object;

  baseUrl: string = environment.production ? "http://gcassin2022-001-site1.etempurl.com/api/charts/trackball" : "https://localhost:44344/api/charts/trackball";
  // baseUrl : string = environment.baseUrl + 'trackball';
  
  ngOnInit(): void {
    this.chartData = [
      { month: "Jan", Buffy: 54, Medge: 56, Callie: 60, Ira: 64, Ray: 56, Joelle: 87, Teagan: 41 },
      { month: "Feb", Buffy: 67, Medge: 44, Callie: 106, Ira: 110, Ray: 88, Joelle: 66, Teagan: 63 },
      { month: "Mar", Buffy: 55, Medge: 101, Callie: 60, Ira: 44, Ray: 98, Joelle: 118, Teagan: 119 },
      { month: "Apr", Buffy: 84, Medge: 45, Callie: 112, Ira: 95, Ray: 36, Joelle: 56, Teagan: 72 },
      { month: "May", Buffy: 67, Medge: 64, Callie: 52, Ira: 48, Ray: 110, Joelle: 88, Teagan: 88 },
      { month: "Jun", Buffy: 67, Medge: 101, Callie: 98, Ira: 99, Ray: 54, Joelle: 44, Teagan: 55 }      
    ]

    this.tooltip = {
      enable: true
    }
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Month',
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 150,
      interval: 25, title: 'Sales',
      labelFormat: '${value}K'
    };
    this.marker = {
      dataLabel: {
        visible: false
      }
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Multi Column Series Chart';

    this.titleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: "sandybrown",
      size: '24px'
    } 
  }

}
