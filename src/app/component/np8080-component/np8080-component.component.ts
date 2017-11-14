import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponentComponent} from '../base-component/base-component.component';
import {TextDocument} from '../../document/document';
import {TextprocessingService} from '../../services/textprocessing.service';
import {templateVisitAll} from "@angular/compiler";
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-np8080-component',
  templateUrl: './np8080-component.component.html',
  styleUrls: ['./np8080-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Np8080ComponentComponent extends BaseComponentComponent implements OnInit {
  textProcessingService: TextprocessingService;

  constructor(private newTextprocessingService: TextprocessingService,
              private  newThemeService: ThemeService) {
    super(newThemeService);
    this.textProcessingService = this.newTextprocessingService;
  }

  @Input()
  note: TextDocument;

  ngOnInit() {
    console.log(this.note.text);
  }

}
