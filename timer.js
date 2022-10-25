const args = process.argv.slice(2);
const timer = function(...args) {
  let alarmIntervals = args[0];
  if(!args) return;
  for(let time of alarmIntervals) {
    if(time < 0 || isNaN(time)) continue
    console.log(time);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
}

timer(args);