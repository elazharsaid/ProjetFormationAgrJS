import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enums';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('item') item: ItemId;
  state = State;

  constructor(private _CollectionService: CollectionService) { }

    ngOnInit() {
    }

  changeState(item: ItemId, newState: State): void {
    /**re */
    // item.state = newState;
    /*console.log(item, newState);*/
    this._CollectionService.update(item, newState);
  }

  deleteItem(itemId: ItemId): void {
    this._CollectionService.delete(itemId);
  }

}
