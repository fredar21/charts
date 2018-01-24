import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


//Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//Services
import { FirebaseService } from './services/firebase.service';

//Components
import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CreateChartComponent } from './components/create-chart/create-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    CreateChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
