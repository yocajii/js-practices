import { addDays, format, lastDayOfMonth, isSaturday } from 'date-fns'
import minimist from 'minimist'

const defineTargetMonth = (argv) => {
  const now = new Date()
  const year = argv.y || now.getFullYear()
  const month = argv.m - 1 || now.getMonth()
  return new Date(year, month)
}

const argv = minimist(process.argv.slice(2))
const target = defineTargetMonth(argv)
const lastDate = lastDayOfMonth(target).getDate()
const title = format(target, 'M月 yyyy')
const firstWday = target.getDay()

console.log(title.padStart(13))
console.log('日', '月', '火', '水', '木', '金', '土')
process.stdout.write('   '.repeat(firstWday))
for (let date = 1; date <= lastDate; date++) {
  process.stdout.write(date.toString().padStart(2) + ' ')
  const thisDate = addDays(target, date - 1)
  if (isSaturday(thisDate)) console.log()
}
