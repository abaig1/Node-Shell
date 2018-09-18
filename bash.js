//output prompt
process.stdout.write('prompt > ')

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ');

  if (cmd === 'pwd') {
    process.stdout.write(`Current directory: ${process.cwd()}`)
  }
});

