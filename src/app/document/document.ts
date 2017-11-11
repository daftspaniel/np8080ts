import {NPStorage} from '../storage/storage';

export class TextDocument {
  id: number;
  text = 'Default document text.';
  downloadName = '';

  lastModified: string;
  storage: NPStorage = new NPStorage();

  get storedText() {
    return this.storage.loadValue('id' + this.id.toString(), null);
  }

  constructor(newId) {
    this.id = newId;
    this.lastModified = Date.now().toString();
    this.initText();
  }

  initText() {
    this.text = this.storedText;
    if (this.text == null) {
      this.text = 'Welcome to NP8080ts';
    }
  }

  updateAndSave() {
    this.lastModified = Date.now().toString();
    this.save();
  }

  save() {
    this.performSave();
  }

  performSave() {
    // updateModifiedDate();
    this.storage.storeValue('id' + this.id.toString(), this.text);
    this.storage.storeValue('dn' + this.id.toString(), this.downloadName);
    this.storage.storeValue('lm' + this.id.toString(), this.lastModified);
  }
}
