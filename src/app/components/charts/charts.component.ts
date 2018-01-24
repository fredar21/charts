import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  select;

  constructor(private servicioFirebase: FirebaseService) {

    this.select= this.servicioFirebase.getChart();
    

   }






  ngOnInit() {
  }

}
