import {ToolbarPanelComponent} from './toolbar-panel.component';

export class Menu {
  name: string;
  tooltip: string;
  handler;
  separator: boolean;

  constructor(aName: string, aTooltip: string, ahandler, aSeparator: boolean = false) {
    this.name = aName;
    this.tooltip = aTooltip;
    this.handler = ahandler;
    this.separator = aSeparator;
  }
}

export class MenuDefinition {
  startMenuItems: Array<Menu> = [];
  modifyMenuItems: Array<Menu> = [];
  addMenuItems: Array<Menu> = [];
  removeMenuItems: Array<Menu> = [];
  advancedMenuItems: Array<Menu> = [];
  viewMenuItems: Array<Menu> = [];
  helpMenuItems: Array<Menu> = [];

  buildMenus(toolbar: ToolbarPanelComponent) {
    console.log('toolbar', toolbar);
    this.startMenuItems.push(new Menu('Clear Text', 'Start again with an empty file.', this.dummy));
    this.startMenuItems.push(new Menu('Welcome Text', 'Put sample text into the file.', this.dummy));
    this.startMenuItems.push(new Menu('Markdown', 'Put sample Markdown into the file.', this.dummy));

    this.modifyMenuItems.push(new Menu('Replace...', 'Replace some text with some other text.\tShortcut - Ctrl + Q', this.dummy));
    this.modifyMenuItems.push(new Menu('Pre/Post...', 'Add text to start and/or end of lines.', this.dummy, true));
    this.modifyMenuItems.push(new Menu('Doublespace', 'Double space the lines.', this.dummy, true));
    this.modifyMenuItems.push(new Menu('Split...', 'Split into separate lines by a delimiter.', this.dummy));
    this.modifyMenuItems.push(new Menu('Single Line', 'Put all the text onto one line.', this.dummy, true));
    this.modifyMenuItems.push(new Menu('Reverse', 'Reverse the line order.', this.dummy));
    this.modifyMenuItems.push(new Menu('Randomise', 'Randomise the line order.', this.dummy, true));
    this.modifyMenuItems.push(new Menu('Sort A-Z', 'Alphabetically sort lines.', this.dummy));
    this.modifyMenuItems.push(new Menu('Number', 'Number non-blank lines.', this.dummy));

    this.helpMenuItems.push(new Menu('About', 'Find out more about NP8080.', () => {
      toolbar.showAbout();
    }));
    this.helpMenuItems.push(new Menu('Manual', 'Read the NP8080 manual.', this.dummy, true));
    this.helpMenuItems.push(new Menu('What\'s New?', 'Find out what\'s changed! - Hosted on Github.com.', this.dummy, true));
    this.helpMenuItems.push(new Menu('GitHub', 'Get the source code - Hosted on Github.com.', this.dummy));
    this.helpMenuItems.push(new Menu('Gitter Chat', 'Gitter based Chatroom - Hosted on Gitter.com.', this.dummy));

  }

  dummy() {
    alert('test');
  }

}
