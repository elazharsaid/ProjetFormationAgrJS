import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {

  @Input() msg;
  @Input() route;

  /**injection du popup pour executer un modal */
  constructor(public activeModal: NgbActiveModal, private _Router: Router) {}

  ngOnDestroy() {
    this._Router.navigate([this.route]);
  }

  ngOnInit() {
  }

}
