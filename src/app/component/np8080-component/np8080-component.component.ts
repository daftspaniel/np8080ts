import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponentComponent} from '../base-component/base-component.component';
import {TextDocument} from '../../document/document';
import {TextprocessingService} from '../../services/textprocessingservice.service';
import {templateVisitAll} from "@angular/compiler";

@Component({
  selector: 'app-np8080-component',
  templateUrl: './np8080-component.component.html',
  styleUrls: ['./np8080-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Np8080ComponentComponent extends BaseComponentComponent implements OnInit {
  textProcessingService: TextprocessingService;

  constructor(private newTextprocessingService: TextprocessingService) {
    super();
    this.textProcessingService = this.newTextprocessingService;
  }

  @Input()
  note: TextDocument;

  ngOnInit() {
    console.log(this.note.text);
  }

}
