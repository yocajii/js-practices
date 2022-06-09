import minimist from 'minimist'
import { Notebook } from './notebook.js'

const argv = minimist(process.argv.slice(2))
const notebook = new Notebook()
if (argv.l) {
  notebook.showNotes()
} else if (argv.r) {
  notebook.showNote()
} else if (argv.d) {
  notebook.deleteNote()
} else {
  notebook.addNote()
}
