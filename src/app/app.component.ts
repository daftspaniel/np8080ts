import { Component } from '@angular/core';
import {TextDocument} from './document/document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NP8080-ts';
  note1: TextDocument = new TextDocument(1);
}
