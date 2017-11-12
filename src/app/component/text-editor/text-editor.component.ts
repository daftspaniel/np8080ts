import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Np8080ComponentComponent} from '../np8080-component/np8080-component.component';
import {TextprocessingService} from '../../services/textprocessingservice.service';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextEditorComponent extends Np8080ComponentComponent implements OnInit {

  showPreview = false;

  constructor(newTextprocessingService: TextprocessingService, newThemeService: ThemeService) {
    super(newTextprocessingService, newThemeService);
  }

  ngOnInit() {
  }

  changeHandler() {
    this.note.updateAndSave();
  }

}
