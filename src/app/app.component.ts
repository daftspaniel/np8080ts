import {Component} from '@angular/core';
import {TextDocument} from './document/document';
import {TextprocessingService} from './services/textprocessing.service';
import {EventbusService} from './services/eventbus.service';
import {ThemeService} from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NP8080-ts';
  note1: TextDocument = new TextDocument(1);
  themeService: ThemeService;

  constructor(newThemeService: ThemeService) {
    this.themeService = newThemeService;
  }
}
