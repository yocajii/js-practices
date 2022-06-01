import fs from 'fs'
import { FileAgent } from './file-agent.js'

export class Notebook {
  notes() {
    const fileAgent = new FileAgent()
    return fileAgent.read()
  }
  addNote() {
    const stdin = fs.readFileSync('/dev/stdin', 'utf8')
    const notes = this.notes()
    const title = stdin.split('\n')[0]
    notes.push({ title: title, body: stdin })
    const fileAgent = new FileAgent()
    fileAgent.write(notes)
  }
  listNote() {
    const notes = this.notes()
    const titles = notes.map(note => note.title)
    notes.forEach(note => console.log(note.title))
  }
}
