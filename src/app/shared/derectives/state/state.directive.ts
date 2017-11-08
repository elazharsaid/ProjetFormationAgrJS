import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { State } from '../../../items/enums/state.enums';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('appState') appState: State;

  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) { }

  ngOnChanges(): void {
    console.log(this.appState);

    const cssClass = `state-${this.appState}`;
    const elementNode = this._ElementRef.nativeElement;

    let text: string;

    switch (this.appState) {

      case State.ALIVRER:
      text = 'to delivry';
      break;

      case State.ENCOURS:
      text = 'hary';
      break;

      case State.LIVRER:
      text = 'livred';
      break;

      default:
      console.log('bim');
      break;
    }

    this._Renderer2.addClass(elementNode, cssClass);
    elementNode.innerHTML = text;


  }

}
