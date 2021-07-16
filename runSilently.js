const fp = require('find-process')
const sleep = require('system-sleep')
const  spawn  = require('child_process').spawn
const isRunning = require('is-running')

var hasAsepriteOpened = false
let app;
while (true){
    // wait until aseprite is open
    do {
        
        fp('name', 'Aseprite').then(apps => {
    
            if(apps.length == 0){
                // ASEPRITE IS NOT OPEN
    
                hasAsepriteOpened = false
                console.log('app not open')
            }else{
                for(i = 0; i < apps.length; i++){
                    if(['Aseprite.exe'].includes(apps[i].name)){
                        // ASEPRITE HAS OPENED
                        app = apps[i]
                        hasAsepriteOpened = true
                    }
                }
            }
        })
        
        // console.log('nom')
        sleep(1000)
    } while (!hasAsepriteOpened);
    
    console.log(app)

    // Start rich precence app
    var rpc = spawn('cscript', ['start.vbs'])
    console.log(rpc)
    
    var hasAsepriteClosed = false
    do{
        if(isRunning(app.pid)){
            console.log('running')
            hasAsepriteClosed = false
        } else{
            hasAsepriteClosed = true
        }
    
        sleep(1000)
    } while(!hasAsepriteClosed)
    
    console.log('app closed')
    
    // KILL rich precence app NODE PROCESS
    fp('name', 'node').then(apps => {
        let nodeProc
    
        for(i = 0; i < apps.length; i++){
            if(apps[i].cmd.includes('asepriteRichPresence')){
                nodeProc = apps[i]
            }
        }
        console.log(nodeProc)
    
        process.kill(nodeProc.pid)
    
    })

}
