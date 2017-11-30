import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponentComponent} from '../../../component/base-component/base-component.component';
import {ThemeService} from '../../../services/theme.service';
import {EventbusService} from '../../../services/eventbus.service';
import {Resources} from '../../../resources/resources';
@Component({
  selector: 'app-about-dialog',
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutDialogComponent extends BaseComponentComponent implements OnInit {

  aboutText: String;

  constructor(newThemeService: ThemeService,
              newEventBusService: EventbusService) {
    super(newThemeService, newEventBusService);
    this.eventBusService.subscribe('ShowAboutDialog', () => {
      this.show();
    });
  }

  ngOnInit() {
    this.showComponent = false;
    this.aboutText = new Resources().welcomeText;
  }
}
