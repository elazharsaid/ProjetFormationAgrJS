import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { COLLECTION } from '../../collection';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  /**collection: Item[];*/
  collection: Observable<Item[]>;

  constructor(private _CollectionService: CollectionService, private modalService: NgbModal) { }

  ngOnInit() {
    /**init de la collection par la liste du service */
    /**this.collection = this._CollectionService.listeService;*/
    this.collection = this._CollectionService.collection;
  }

  addItem(item: Item) {
    console.log(item);
    this._CollectionService.add(item);
    // **this.collection.push(item); passage par collection static*/
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'GG cmd ajoutée';
    /**redirection vers la page */
    modalRef.componentInstance.route = '/items/list';
}


}
