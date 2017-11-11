import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponentComponent implements OnInit {

  showComponent = false;

  show() {
    this.showComponent = true;
  }

  close() {
    this.showComponent = false;
  }

  // String get display => showComponent ? 'block' : 'none';

  constructor() {
  }

  ngOnInit() {
  }

}
