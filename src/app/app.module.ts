import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './component/text-editor/text-editor.component';
import { StatusPanelComponent } from './component/status-panel/status-panel.component';
import { BaseComponentComponent } from './component/base-component/base-component.component';
import { Np8080ComponentComponent } from './component/np8080-component/np8080-component.component';
import {TextprocessingService} from './services/textprocessingservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    StatusPanelComponent,
    BaseComponentComponent,
    Np8080ComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TextprocessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
