import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {TextprocessingService} from '../../services/textprocessing.service';
import {Np8080ComponentComponent} from '../np8080-component/np8080-component.component';
import {MenuDefinition} from './menu';
import {EventbusService} from '../../services/eventbus.service';

@Component({
  selector: 'app-toolbar-panel',
  templateUrl: './toolbar-panel.component.html',
  styleUrls: ['./toolbar-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarPanelComponent extends Np8080ComponentComponent implements OnInit {

  menus: MenuDefinition = new MenuDefinition();

  constructor(newTextprocessingService: TextprocessingService,
              newThemeService: ThemeService,
              newEventBusService: EventbusService) {
    super(newTextprocessingService, newThemeService, newEventBusService);
    this.menus.buildMenus(this);
  }

  ngOnInit() {
  }

  downloadHandler() {
    this.note.save();
  }

  undoHandler() {
  }

  showAbout() {
    console.log('Posting');
    this.eventBusService.post('ShowAboutDialog');
  }

}
