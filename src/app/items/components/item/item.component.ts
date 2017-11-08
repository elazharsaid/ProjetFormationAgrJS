import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enums';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('item') item: Item;
  state = State;

  constructor(private _CollectionService: CollectionService) { }

    ngOnInit() {
    }

  changeState(item: Item, newState: State): void {
    item.state = newState;
    /*console.log(item, newState);*/
    this._CollectionService.update(item, newState);
  }

}
