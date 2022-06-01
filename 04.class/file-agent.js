import fs from 'fs'
import path from 'path'

export class FileAgent {
  constructor () {
    this.scriptDir = path.dirname(process.argv[1])
    this.jsonPath = path.join(this.scriptDir, 'data/notes.json')
  }

  read() {
    const notes = fs.readFileSync(this.jsonPath, 'utf8')
    return JSON.parse(notes)
  }

  write(notes) {
    fs.writeFileSync(this.jsonPath, JSON.stringify(notes))
  }
}
