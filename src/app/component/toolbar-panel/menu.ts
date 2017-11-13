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
    this.startMenuItems.push(new Menu('Clear Text', 'Start again with an empty file.', this.dummy));
    this.startMenuItems.push(new Menu('Welcome Text', 'Put sample text into the file.', this.dummy));
    this.startMenuItems.push(new Menu('Markdown', 'Put sample Markdown into the file.', this.dummy));

    this.modifyMenuItems.push(new Menu('Replace...', 'Replace some text with some other text.\tShortcut - Ctrl + Q', this.dummy));
    this.modifyMenuItems.push(new Menu('Pre/Post...', 'Add text to start and/or end of lines.', this.dummy, true));
    this.modifyMenuItems.push(new Menu('Doublespace', 'Double space the lines.', this.dummy, true));
    // this.modifyMenuItems.push(new Menu("Split...", toolbar.splitHandler, "Split into separate lines by a delimiter."),
    //   this.modifyMenuItems.push(new Menu("Single Line", toolbar.oneLineHandler,
    //         "Put all the text onto one line.", true),
    //         this.modifyMenuItems.push(new Menu("Reverse", toolbar.reverseHandler, "Reverse the line order."),
    //           this.modifyMenuItems.push(new Menu("Randomise", toolbar.randomHandler, "Randomise the line order.",
    //             true),
    //             this.modifyMenuItems.push(new Menu("Sort A-Z", toolbar.sortHandler, "Alphabetically sort lines."),
    //               this.modifyMenuItems.push(new Menu("Number", toolbar.numberHandler, "Number non-blank lines.")
  }

  dummy() {
    alert('test');
  }
}
