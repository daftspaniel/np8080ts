import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponentComponent} from '../base-component/base-component.component';
import {TextDocument} from '../../document/document';

@Component({
  selector: 'app-np8080-component',
  templateUrl: './np8080-component.component.html',
  styleUrls: ['./np8080-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Np8080ComponentComponent extends BaseComponentComponent implements OnInit {

  constructor() {
    super();
  }

  @Input()
  note: TextDocument;

  ngOnInit() {
    console.log(this.note.text);
  }

}
