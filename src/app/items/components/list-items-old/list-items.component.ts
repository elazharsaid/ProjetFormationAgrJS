import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Item } from '../../interfaces/item.model';
import { COLLECTION } from '../../collection';
import { State } from '../../enums/state.enums';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection: Item[] = COLLECTION;
  state  = State;

  constructor() { }

  ngOnInit() {
  }

}
