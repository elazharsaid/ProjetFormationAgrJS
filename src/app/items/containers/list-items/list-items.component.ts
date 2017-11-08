import { Component, OnInit } from '@angular/core';

import { Item } from '../../interfaces/item.model';
/**import { COLLECTION } from '../../collection';*/
import { State } from '../../enums/state.enums';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection: Item[];
  state  = State;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.listeService;
  }

}
