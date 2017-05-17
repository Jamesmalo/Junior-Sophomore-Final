const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
    if(str == "motion"){
        terminal.question("Which variable are you solving for? (options are:d,v,t,or a)",function(str1)){
            if(str1 == "d"){
                printOptions();
            }
            else if(str1 == "v"){

            }
            else if(str1 == "t"){

            }
            else if(str1 == "a"){

            }
        }
    }
    else if(str == "energy"){
        terminal.question("Which variable are you solving for? (options are:ke,m,or v)",function(str1))
    }
    else{

    }
    //you will configure your series of questions inside here.


});
