import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponentComponent} from '../base-component/base-component.component';
import {EventbusService} from '../../services/eventbus.service';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditableLabelComponent extends BaseComponentComponent implements OnInit {

  editMode = false;
  tabFocused = false;
  outputText;

  @Input()
  text: string;

  @Input()
  id: number;

  constructor(newThemeService: ThemeService, newEventBusService: EventbusService) {
    super(newThemeService, newEventBusService);
  }

}
