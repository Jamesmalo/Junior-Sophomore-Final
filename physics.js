const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

function end(){
    terminal.close();
}

const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
    str.toLowerCase();
    if(str == "motion"){
        terminal.question("Which variable are you solving for?",function(str1){
            str.toLowerCase();
            if(str1 == "d"){
              printOptions();
              terminal.question("What variables do you know?",function(str2){
                 str.toLowerCase();
                str2 = convertToArray(str2);
                if(str2[2] == "null"){
                  console.log(motion.distance(str[1],str[3]));
                  end();
                }
                else{
                  console.log(motion.distance2(str[1],str[2],str[3]));
                  end();
                }
              });
            }
            else if(str1 == "v"){
              printOptions();
              terminal.question("What variables do you know?",function(str2){
                str2 = convertToArray(str2);
                if(str2[2] == "null"){
                  console.log(motion.velocity(str2[0],str2[3]));
                  end();
                }
                else{
                  console.log(motion.velocity2(str2[0],str2[2],str2[3]));
                  end();
                }
              });
            }
            else if(str1 == "t"){
              printOptions();
              terminal.question("What variables do you know?",function(str2){
                str2 = convertToArray(str2);
                if(str2[2] == "null"){
                  console.log(motion.time(str2[0],str2[1]));
                  end();
                }
                else{
                  console.log(motion.time2(str[1],str[2]));
                  end();
                }
            });
            else if(str1 == "a"){
              printOptions();
              terminal.question("What variables do you know?",function(str2){
                str2 = convertToArray(str2);
                console.log(motion.acceleration(str[0],str[1],str[3]));
                end();
            });
        }
      }
    });
  }
});
    else if(str == "energy"){
        terminal.question("Which variable are you solving for?",function(str1){
        str.toLowerCase();
          if(str1 == "ke"){
            terminal.question("what variables do you know?",function(str2){
              str2 = convertToArray(str2);
              console.log(energy.kineticEnergy(str[1],str[4]));
              end();
            });
          }
          else if(str1 == "m"){
            terminal.question("what variables do you know?",function(str2){
                str.toLowerCase();
              str2 = convertToArray(str2);
              console.log(energy.mass(str[1],str[5]));
              end();
            });
          }
          else if(str1 == "v"){
            terminal.question("what variables do you know?",function(str2){
                str.toLowerCase();
              str2 = convertToArray(str2);
              console.log(energy.velocity(str[4],str[5]));
              end();
            });
          }
      });
    }
    else{
      console.log("I'm sorry I dont know how to calculate that yet.");
      end();
    }
    //you will configure your series of questions inside here.


});
