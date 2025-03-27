// argv - argument vector
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env.LOGNAME);

// pid - process ID
console.log(process.pid);

// cwd() - current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());
process.on('exit', (code) => {
    console.log(`Exit with code: ${code}`);
});

// exit()
process.exit(0);
console.log('Hello after exit')