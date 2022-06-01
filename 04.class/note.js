export class Note {
  constructor (text) {
    this.title = text.split('/n')[0]
    this.body = text
  }
}