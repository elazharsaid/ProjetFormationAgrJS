import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

import { State } from '../../../items/enums/state.enums';
import { Item } from '../../../items/interfaces/item.model';
import { COLLECTION } from '../../../items/collection';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  /**creation d'objet */
  state= State;
  collection = COLLECTION;
  /**newItem: Item; */
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(private _Router: Router, private fb: FormBuilder) {
    /** init form controle*/
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(5)
    ]);

    this.refCtrl = fb.control('');
    this.stateCtrl = fb.control(this.state.ALIVRER);
    /**init form group */
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
    /**instance d'objet  il faut redefinir les attrs*/
    /**this.newItem = {
      name: '',
      ref: '',
      state: State.ALIVRER,
    };*/
  }

  /** onload du formulaire executer un ensemble de traitement binding directe avec la ngModle(var sys) */
  process() {
    /**ajouter une info a la fin d'une liste cette a ction sera developper par addComponent */
    /** this.collection.push(this.newItem);*/
    /** recap de tous les info du formulaire this.form.value*/
    /**this.collection.push({
      name: this.form.get('name').value, en peux utiliser name: this.nameCtrl.value
      ref: this.form.get('ref').value,
      state: this.form.get('state').value
    });*/

    /** */
    this.newItem.emit({
      name: this.nameCtrl.value,
      ref: this.nameCtrl.value,
      state: this.nameCtrl.value
    });

    this.form.reset();
    /**this.stateCtrl.setValue(this.stateCtrl.value);*/
    /**redirection vers la page liste */
    /** this._Router.navigate(['/list']); */

  }

  isError(champ: string): any {
    return this.form.get(champ).touched && this.form.get(champ).hasError('minlength');
  }

  // tslint:disable-next-line:member-ordering
  @Output() newItem: EventEmitter<Item> = new EventEmitter();

}
