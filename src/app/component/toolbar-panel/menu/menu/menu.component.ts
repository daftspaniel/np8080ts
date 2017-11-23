import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../../../services/theme.service';
import {Menu} from '../../menu';
import {BaseComponentComponent} from '../../../base-component/base-component.component';
import {EventbusService} from '../../../../services/eventbus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent extends BaseComponentComponent implements OnInit {

  @Input('menutitle')
  menutitle: string;

  @Input('items')
  items: Array<Menu>;

  constructor(newThemeService: ThemeService, newEventBusService: EventbusService) {
    super(newThemeService, newEventBusService);
  }

  ngOnInit() {
  }

  getMenuClass() {
    return this.themeService.mainClass + ' ' + this.themeService.highlightClass;
  }

  getFooterClass() {
    return this.themeService.mainClass + ' ' + this.themeService.borderClass;
  }

  getBorderClass() {
    return this.themeService.borderClass;
  }

  menuClick(handler) {
    // this.close();
    console.log(handler);
    handler();
  }

}
