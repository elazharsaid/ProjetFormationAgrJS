import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Item } from '../../interfaces/item.model';
/**import { COLLECTION } from '../../collection';*/
import { State } from '../../enums/state.enums';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemsComponent implements OnInit {

  /** collection: Item[]; */
  collection: Observable<ItemId[]>;
  // state  = State;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    /** this.collection = this._CollectionService.listeService;*/
    this.collection = this._CollectionService.collection;
    console.log('yop' + this.collection);
  }

}
