import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponentComponent} from '../base-component/base-component.component';
import {EventbusService} from '../../services/eventbus.service';
import {ThemeService} from '../../services/theme.service';
import {$} from 'protractor';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss'],
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

  constructor(newThemeService: ThemeService,
              newEventBusService: EventbusService,
              private titleService: Title) {
    super(newThemeService, newEventBusService);
    this.text = 'NP8080.txt';
  }

  ngOnInit() {
    this.formatText();
  }

  toggle() {
    console.log('toggl');
    this.editMode = !this.editMode;
    if (this.editMode) {
      const tb: any = document.querySelector('#editbox' + this.id);
      tb.focus();
    } else if (this.text.length === 0) {
      this.reset();
    }
    this.eventBusService.subscribe('tabFocusDone' + (this.id === 1 ? 2 : 1).toString(), this.tabBlur);
  }

  getTabsClass() {
    return this.themeService.secondaryClass;
  }

  giveTabFocus() {
    if (this.tabFocused) {
      return;
    }
    this.tabFocused = true;
    this.eventBusService.post('tabFocusDone' + this.id);
  }

  tabBlur() {
    this.tabFocused = false;
  }

  formatText() {
    this.outputText = this.text.length < 18 ? this.text : this.text.substring(0, 15) + '...';
    this.titleService.setTitle(this.outputText);
  }

  update() {
    this.formatText();
  }

  reset() {
    this.update();
  }
}
