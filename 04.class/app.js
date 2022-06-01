import minimist from 'minimist'
import { Notebook } from './notebook.js'

const argv = minimist(process.argv.slice(2))
const notebook = new Notebook()
if (argv.l) {
  notebook.listNote()
} else if (argv.r) {
} else if (argv.d) {
} else {
  notebook.addNote()
}
