import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../items/interfaces/item.model';
import { State } from '../../../items/enums/state.enums';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../../items/interfaces/item-id.model';

@Injectable()
export class CollectionService {

  /**creation de variable */
  /**listeService: Item[] = COLLECTION;*/

  private itemCollection: AngularFirestoreCollection<Item>;
  collection: Observable<ItemId[]>;

  constructor(private afs: AngularFirestore) {
    this.itemCollection = afs.collection<Item>('collection');
    /** this.collection = this.itemCollection.valueChanges();*/
    /**this.collection.subscribe((data) => console.log(data));*/
    /**this.itemCollection.snapshotChanges().subscribe((data) => {
      console.log(data);
    });*/

    this.collection = this.itemCollection.snapshotChanges().map(data => {
      return data.map(snap => {
        return {
          name: snap.payload.doc.data().name,
          ref: snap.payload.doc.data().ref,
          state: snap.payload.doc.data().State,
          id: snap.payload.doc.id
        };
      });
    });
  }


  update(item: ItemId, newState: State): void {
    // item.state = newState;
    this.afs.doc<Item>('collection/' + item.id).update(item);
  }


  add(item: Item): void {
      /**this.listeService.push(item); */
      this.itemCollection.add(item);
  }


  delete(item: ItemId): void {
    this.afs.doc<Item>('collection/' + item.id).delete();
  }


}
