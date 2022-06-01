import fs from 'fs'
import inquirer from 'inquirer'
import { FileAgent } from './file-agent.js'
const { prompt } = inquirer

export class Notebook {
  addNote () {
    const stdin = fs.readFileSync('/dev/stdin', 'utf8')
    const notes = FileAgent.read()
    const title = stdin.split('\n')[0]
    notes.push({ title, body: stdin })
    FileAgent.write(notes)
  }

  showNotes () {
    const notes = FileAgent.read()
    notes.forEach(note => console.log(note.title))
  }

  async showNote () {
    const notes = FileAgent.read()
    const titles = notes.map(note => note.title)
    const selected = await prompt({
      type: 'list',
      name: 'title',
      message: 'Choose a note you want to delete:',
      choices: titles
    })
    const selectedNote = notes.filter(note => note.title === selected.title)[0]
    console.log(selectedNote.body)
  }

  async deleteNote () {
    const notes = FileAgent.read()
    if (notes.length > 0) {
      const titles = notes.map(note => note.title)
      const selected = await prompt({
        type: 'list',
        name: 'title',
        message: 'Choose a note you want to see:',
        choices: titles
      })
      const filteredNotes = notes.filter(note => note.title !== selected.title)
      await FileAgent.write(filteredNotes)
      console.log(`${selected.title} has been deleted.`)
    } else {
      console.log('There is no note.')
    }
  }
}
