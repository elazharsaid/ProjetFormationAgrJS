import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
