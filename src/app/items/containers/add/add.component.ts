import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { COLLECTION } from '../../collection';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  collection: Item[];

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    /**init de la collection par la liste du service */
    this.collection = this._CollectionService.listeService;
  }

  addItem(item: Item) {
    console.log(item);
    this._CollectionService.add(item);
    // **this.collection.push(item); passage par collection static*/
  }


}
