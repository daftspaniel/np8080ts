import {Injectable} from '@angular/core';

@Injectable()
export class TextprocessingService {

  constructor() {
  }

  getLineCount(text: string): number {
    return (text.match(/\n/g) || []).length + 1;
  }

  getWordCount(text: string): number {
    return text.trim().split(/\s+/).length;
  }
}
