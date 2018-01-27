import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  select;
  pieChartData= {};

  constructor(private servicioFirebase: FirebaseService) {

    this.select= this.servicioFirebase.getChart();
    this.pieChartData =  {
      chartType: 'ColumnChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  20],
        ['Watch TV', 2],
        ['Sleep',    7]
      ],
      options: {'title': 'TAreas'},
    };
  

   }

  ngOnInit() {
  }


  graficar(data){
    this.select= this.servicioFirebase.getChart();
   console.log(data);
   this.guardar();
  }

  guardar(){
    let mama= {
      nombre: "jojo",
      valor: 23
    }

    this.servicioFirebase.saveChart(mama);
  }

}
