const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
    str.toLowerCase();
    if(str == "motion"){
        terminal.question("Which variable are you solving for?",function(str1)){
            if(str1 == "d"){
              printOptions();
              terminal.question("What variables do you know?",function(str2)){
                if(str2[2] == "null"){
                  motion.distance(str[1],str[3])
                }
                else{
                  motion.distance2(str[1],str[2],str[3])
                }
              }
            }
            else if(str1 == "v"){
              printOptions();
              terminal.question("What variables do you know?",function(str2)){
                if(str2[2] == "null"){
                  motion.velocity(str2[0],str2[3])
                }
                else{
                  motion.velocity2(str2[0],str2[2],str2[3])
                }
              }
            }
            else if(str1 == "t"){
              printOptions();
              terminal.question("What variables do you know?",function(str2)){
                if(str2[0] == "null"){
                  motion.time(str2[],str2[])
                }
                else{
                  motion
                }
            }
            else if(str1 == "a"){
              printOptions();
              terminal.question("What variables do you know?",function(str2)){

            }
        }
    }
    else if(str == "energy"){
        terminal.question("Which variable are you solving for?",function(str1)){
          if(str1 == "ke"){
            terminal.question("what variables do you know?",function(str2))
          }
        }
    }
    else{
      console.log("I'm sorry I dont know how to calculate that yet.");
    }
    //you will configure your series of questions inside here.


});
