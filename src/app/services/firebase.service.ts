import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    console.log("servicio listo");
   
}

getChart(){
  this.items = this.db.collection('chart').snapshotChanges().map(actions => {
    console.log(actions)
    return actions.map(snapshot => {
      return {
        key: snapshot.payload.doc.ref.id,
        data: snapshot.payload.doc.data()
      };
    });
  });
  console.log(this.items);
  return this.items;
}

saveChart(data){
  
  return this.items.add(data);
}

}

