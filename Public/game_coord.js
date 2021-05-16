/*
Ben Lyon, UP2038975, 2021, Mini Game Survival
This program will init on serve and set up all the variables for running games and altering the HTML elements.
This script will act as the middle-man between indiv game scripts and the HTML body
*/



//######## declare starting variables ########
var global_score = 0
var global_lives = 5



//######## innit event listeners ########
function innit_listeners ();{
    alert("go fuck yourself");
    document.getElementById("js_block_1").addEventListener("click", chosen_square(1));
}



//######## game coordinator functions ########

//chosen square function - called when the player selects a square
function chosen_square (square_id); {
    alert("TADA");
    var test = document.getElementById("js_block_1");
    test.style.backgroundColor = "red";
    //check if square id matches correct square id
}
//update score function - adds an extra point to the score
function update_score (); {
    global_score ++;
    document.getElementById
}

//change lives function - takes string as argument and changes lives by that amount, sends to lives_check at end
function change_lives (alter_amount); {

    //figures out to add or subreact argument
    if (alter_amount.substr(0,1) == '+') {
        global_lives =+ alter_amount.substr(1);
    }
    else if(alter_amount.substr(0,1) == '-') {
        global_lives =- alter_amount.substr(1);
    }
    else {
        alert ("The change_lives function couldnt read if the operation was plus or minus");
    }

    //calls lives_check to catch errors
    lives_check();
}


//lives check function - checks the number of lives and acts accordingly.  0 = die play again? | 1-5 = pass | >5 throw error
function lives_check(); {
    l
}