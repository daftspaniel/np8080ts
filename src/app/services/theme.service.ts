import {Injectable} from '@angular/core';

@Injectable()
export class ThemeService {
  theme = 'dark';

  constructor() {
  }

  get currentTheme() {
    return this.theme;
  }

  get mainClass() {
    return this.theme + '-theme-1';
  }

  get secondaryClass() {
    return this.theme + '-theme-2';
  }

  get tertiaryClass() {
    return this.theme + '-theme-3';
  }

  get documentClass() {
    return this.theme + '-document';
  }

  get highlightClass() {
    return this.theme + '-highlight';
  }

  get borderClass() {
    return this.theme + '-border';
  }

  //  void load() : string () { return this.theme = loadValue(SelectedThemeKey, 'default');}
  //
  // set return theme(newTheme) {
  // return theme = newTheme;
  // storeValue(SelectedThemeKey, newTheme);
  // }
}
