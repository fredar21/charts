import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  items: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    console.log("servicio listo");
   
}

getChart(){
  this.items = this.db.list('chart').snapshotChanges();
  return this.items;
}

