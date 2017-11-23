import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {EventbusService} from '../../services/eventbus.service';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponentComponent implements OnInit {

  themeService: ThemeService;
  eventBusService: EventbusService;
  showComponent = false;

  constructor(newThemeService: ThemeService,
              newEventBusService: EventbusService) {
    this.themeService = newThemeService;
    this.eventBusService = newEventBusService;
  }

  show() {
    this.showComponent = true;
    console.log('show comp');
  }

  close() {
    this.showComponent = false;
    console.log('close comp');
  }

  get display() {
    return this.showComponent ? 'block' : 'none';
  }

  getBorderClass(): string {
    return this.themeService.borderClass;
  }

  getBackgroundClass(): string {
    return this.themeService.tertiaryClass;
  }

  getDocumentClass(): string {
    return this.themeService.documentClass;
  }

  getClass(): string {
    return this.themeService.mainClass;
  }

  getHeaderClass(): string {
    return this.themeService.secondaryClass;
  }

  ngOnInit() {
  }

}
