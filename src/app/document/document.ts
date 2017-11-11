export class TextDocument {
  // final int _id;
  id: number;
  text = 'Default document text.';
  downloadName = '';

  lastModified: Date;

  constructor(newId) {
    this.id = newId;
    this.lastModified = new Date('01/12/12');
  }
}
