import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Np8080ComponentComponent} from '../np8080-component/np8080-component.component';
import {TextprocessingService} from '../../services/textprocessing.service';
import {ThemeService} from '../../services/theme.service';
import {EventbusService} from '../../services/eventbus.service';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatusPanelComponent extends Np8080ComponentComponent implements OnInit {

  constructor(newTextprocessingService: TextprocessingService,
              newThemeService: ThemeService,
              newEventBusService: EventbusService) {
    super(newTextprocessingService, newThemeService, newEventBusService);
  }

  get length() {
    return this.note.text.length;
  }

  get wordCount() {
    return this.note.text.length;
  }

  get modified() {
    return this.note.lastModified;
  }

  get lineCount() {
    return this.textProcessingService.getLineCount(this.note.text);
  }

  ngOnInit() {
  }

}
