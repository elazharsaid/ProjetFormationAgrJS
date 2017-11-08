import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../items/interfaces/item.model';
import { State } from '../../../items/enums/state.enums';

@Injectable()
export class CollectionService {

  /**creation de variable */
  listeService: Item[] = COLLECTION;

  constructor() { }


  update(item: Item, newState: State): void {
    item.state = newState;
  }


  add(item: Item): void {
    this.listeService.push(item);
  }


  delete(item: Item): void {

  }


}
