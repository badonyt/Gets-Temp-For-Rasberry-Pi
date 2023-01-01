const { exec } = require("child_process");

exec("/usr/bin/vcgencmd measure_temp", (error, stdout, stderr) => {
    if(error){
        console.log("Error"+error)
        return;
    }
    if(stderr){
        console.log(stderr)
        return;
    }
    console.log("stdout: " + stdout)
})