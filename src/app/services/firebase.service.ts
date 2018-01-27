import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  items: AngularFireList<any>;
  item: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    console.log("servicio listo");
   
}

getChart(){
  this.items = this.db.list('chart');
  this.item = this.items.snapshotChanges().map(actions => {
    return actions.map(snapshot => {
      return [snapshot.payload];
    });
  });
  console.log(this.item);
  return this.item;
}

saveChart(data){
  this.items.push(data);
}

}

