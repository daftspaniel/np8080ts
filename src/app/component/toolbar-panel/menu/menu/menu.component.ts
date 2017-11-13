import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../../../services/theme.service';
import {Menu} from '../../menu';
import {BaseComponentComponent} from '../../../base-component/base-component.component';

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

  constructor(newThemeService: ThemeService) {
    super(newThemeService);
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
    close();
    handler();
  }

}
