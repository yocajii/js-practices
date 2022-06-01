import fs from 'fs'
import path from 'path'

export class FileAgent {
  static #scriptDir = path.dirname(process.argv[1])
  static #jsonPath = path.join(this.#scriptDir, 'data/notes.json')

  static read () {
    const jsonNotes = fs.readFileSync(this.#jsonPath, 'utf8')
    return JSON.parse(jsonNotes)
  }

  static write (notes) {
    fs.writeFileSync(this.#jsonPath, JSON.stringify(notes))
  }
}
