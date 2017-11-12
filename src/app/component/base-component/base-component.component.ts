import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponentComponent implements OnInit {

  themeService: ThemeService;
  showComponent = false;

  constructor(newThemeService: ThemeService) {
    this.themeService = newThemeService;
  }

  show() {
    this.showComponent = true;
  }

  close() {
    this.showComponent = false;
  }

  // String get display => showComponent ? 'block' : 'none';
  // String getBorderClass() => themeService.borderClass;

  getBorderClass(): string {
    return this.themeService.borderClass;
  }

  getBackgroundClass(): string {
    return this.themeService.tertiaryClass;
  }

  getDocumentClass(): string {
    return this.themeService.documentClass;
  }

  ngOnInit() {
  }

}
