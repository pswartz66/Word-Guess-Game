
// Create an array of words related to basketball theme
// All NBA teams city, name, player name
var words = [
    'Atlanta Hawks',
    'Boston Celtics', 
    'Brooklyn Nets',
    'Charlotte Bobcats', 
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors', 
    'Houston Rockets',
    'Indiana Pacers',
    'LA Clippers',
    'LA Lakers',
    'Memphis Grizzlies', 
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves', 
    'New Orleans Hornets',
    'New York Knicks',
    'Oklahoma City Thunder', 
    'Orlando Magic',
    'Philadelphia Sixers', 
    'Phoenix Suns',
    'Portland Trail Blazers', 
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards',
    'LeBron James',
    'Kevin Durant',
    'Stephen Curry',	
    'James Harden',
    'Anthony Davis',	
    'Giannis Antetokounmpo',	
    'Russell Westbrook',
    'Chris Paul',
    'Joel Embiid',	
    'Jimmy Butler',
    'Paul George',
    'Kawhi Leonard',
    'Draymond Green',
    'Rudy Gobert',
    'Damian Lillard',
    'Al Horford',
    'Kyrie Irving',
    'Nikola Jokic',
    'Karl Anthony Towns',
    'Victor Oladipo',
    'LaMarcus Aldridge',
    'Klay Thompson',
    'Kyle Lowry',
    'John Wall',
    'Gordon Hayward',
    'Ben Simmons',
    'Bradley Beal',	 
    'Khris Middletown',
    'Jrue Holiday',
    'DeMar DeRozan',	
    'Kevin Love',
    'Kemba Walker',	
    'CJ McCollum',
    'Donovan Mitchell',	
    'Clint Capela',
    'Mike Conley Jr',	
    'Paul Millsap',
    'Steven Adams',
    'Jayson Tatum',
    'Marc Gasol',
    'Blake Griffin',	
    'Otto Porter',
    'DeAndre Jordan',	
    'Gary Harris',
    'Goran Dragic',	
    'Andre Drummond',	
    'Jaylen Brown',
    'Robert Covington',	
    'Eric Gordon',
    'Devin Booker',	
    'Derrick Favors',
    'Kristaps Porzingis',	
    'Eric Bledsoe',
    'Dario Saric',
    'Jamal Murray',	
    'Joe Ingles',
    'Ricky Rubio',	
    'Jeff Teague',	
    'Harrison Barnes',	
    'Nikola Mirotic',
    'Lou Williams',
    'JJ Redick',
    'Jonas Valanciunas',	
    'Jusef Nurkic',
    'Tobias Harris',	
    'Aaron Gordon',
    'Myles Turner',
    'DeMarcus Cousins',	
    'Dwight Howard',
    'Will Barton',
    'Josh Richardson',
    'Julius Randle',
    'Nicolas Batum',
    'Andrew Wiggins',
    'Brandon Ingram',
    'Thaddeus Young',
    'Trevor Ariza',
    'Serge Ibaka',
    'Domantas Sabonis',	
    'Dennis Schroder',
    'Al Farouq Aminu',	
    'Terry Rozier',
    'Taj Gibson',
    'Lauri Markkanen',	
    'PJ Tucker',
    'James Johnson',	
    'Andre Iguodala',
    'Kyle Anderson',
    'Dejounte Murray',	
    'Nikola Vucevic',
    'Kent Bazemore',
    'Evan Fournier',
    'Kelly Olynyk',
    'Fred Vanfleet',	
    'Demarre Carroll',	
    'Dirk Nowitzki',
    'Reggie Jackson',
    'Paul Gasol',
    'Brook Lopez',	
    'Lonzo Ball']



// List of all letters in an array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
                'g', 'h', 'i', 'j', 'k', 'l', 
                'm', 'n', 'o', 'p', 'q', 'r', 
                's', 't', 'u', 'v', 'w', 'x', 
                'y', 'z']
                
// # of incorrect guesses upon which the game will end
var incorrect_guesses = 6;
var correct_guesses = 0;

// Total # of guesses = the # of letters in alphabet
var total_guesses = alphabet.length;

// Each time user guesses a letter store it in
// user_guessed_letters array
// reset at game end
var user_guessed_letters = [];

// Array of wrong guesses
var wrong_guesses = [];

// Variables that hold references to the html id's
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentWord = document.getElementById("current-word");
var placeholderKeys = document.getElementById("placeholder-keys");
var guessesRemaining = document.getElementById("guesses-remaining");
var guessedLetters = document.getElementById("guessed-letters");


// Generates a random word from the words array above
var computerWord = words[Math.floor(Math.random() * words.length)].toLowerCase();



// Turn computerWord into an array of "_" 's 
var computerWordList = [];
for (var i = 0; i < computerWord.length; i++) {
    if (computerWord.charAt(i) !== " ") {
        computerWordList.push("_");
    }
    else {
        computerWordList.push("+");
    }
};



// CHANGE THIS TO A FUNCTION TO BE CALLED TO CONVERT ARRAY OF _ TO LETTERS????????????
var computerWordString = "";
for (var i = 0; i < computerWord.length; i++) {
    if (computerWord.charAt(i) !== " ") {
        computerWordString += "_ ";
    }
    else {
        computerWordString += computerWord.charAt(i) + " "; 
    }
};


// function to check if userguess is in guessed letters array
// to be called later inside onkeyup 
function doesExistInArray(myvalue, array) {
    for (var i = 0; i < array.length; i ++) {
        if (array[i] === myvalue) {
            return true;
        }
        else {
            return false;
        }
    }
};

// function to check how many letters are in a string
function numberOfLetters(myvalue, stringvalue) {
    var my_count = 0;
    for (var i = 0; i < stringvalue.length; i ++) {
        if (stringvalue.charAt(i) === myvalue) {
            my_count += 1;
        }
    }
    return my_count;
};

// length of computerWord needs to be changed dynamically below
var computerWordLength = computerWord.length;

// # of guesses remaining = length of computerWord - 1
var guessesRemaining = computerWord.length;


// number of wins
var wins = 0;

// number of losses
var losses = 0;

console.log(computerWord);



document.getElementById("reset-button").addEventListener("click", function(){
    computerWord = "";
    computerWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

    wrong_guesses = [];
    correct_guesses = 0;
    incorrect_guesses = 6;

    

    guessesRemaining = computerWord.length;
    // when the reset button is clicked reset guessues remaining to "#"
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    

    // when the reset button is clicked reset guessues remaining to "#"
    document.getElementById("guessed-letters").innerHTML = "";
    user_guessed_letters = [];


    
    console.log(computerWord);

    // Turn computerWord into an array of "_" 's 
    computerWordList = [];
    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord.charAt(i) !== " ") {
            computerWordList.push("_");
        }
        else {
            computerWordList.push("  +  ");
        }
    }

    computerWordString = "";
    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord.charAt(i) !== " ") {
            computerWordString += "_ ";
        }
        else {
            computerWordString += computerWord.charAt(i) + " ";
        }
    }

    // when reset button is clicked reset the palceholder keys id
    document.getElementById("placeholder-keys").innerHTML = computerWordList.join(' ');

    

});


// MAIN GAME LOGIC TAKES PLACE HERE ------------------------------------- //
document.onkeyup = function(event) {

    // Set the keyboard click from the user to a variable
    var userGuess = event.key;

    // letter returns true if 'a' is in computerWord
    var letter = computerWord.includes(userGuess);

    var doesExist = user_guessed_letters.includes(userGuess);
    var doesExistWrong = wrong_guesses.includes(userGuess);



    

    if (letter) {
        // user_guessed_letters.push(userGuess);
        console.log(userGuess);
        correct_guesses += 1;

        for (var i = 0; i < computerWord.length; i ++) {
            
            if (computerWord.charAt(i) === userGuess) {
                computerWordList[i] = userGuess;
                

                if (computerWordList.join('') === (computerWord.substr(0, computerWord.indexOf(" ")) + "+" + computerWord.substr(computerWord.indexOf(" ") + 1, computerWord.length))) {
            
                    wins ++;
                    
                    wrong_guesses = [];
                    correct_guesses = 0;
                    incorrect_guesses = 6;
                    
                    guessesRemaining = 0;
                    computerWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
                    guessesRemaining = computerWord.length;

                    user_guessed_letters = [];

                    computerWordList = [];
                    for (var i = 0; i < computerWord.length; i++) {
                        if (computerWord.charAt(i) !== " ") {
                            computerWordList.push("_");
                        }
                        else {
                            computerWordList.push("+");
                        }
                    };

                    computerWordString = "";
                    for (var i = 0; i < computerWord.length; i++) {
                        if (computerWord.charAt(i) !== " ") {
                            computerWordString += "_ ";
                        }
                        else {
                            computerWordString += computerWord.charAt(i) + " ";
                        }
                    }

                    console.log(computerWord);
                    console.log("You win");
                    
                }


            }
            
        }

    }
     
    else {

        if (doesExistWrong) {
            console.log("Letter in wrong array");
        }

        else {
            wrong_guesses.push(userGuess);
            console.log("Wrong guesses: " + wrong_guesses);

            // determine how many guesses the user has remaining
            guessesRemaining = (computerWordLength - user_guessed_letters.length);
        }

    }    
    
    if (doesExist) {
        console.log("Letter exists in guessed letters");
    
    }

    else {

        console.log("pushing to user guessed letters");
        // Push letter to user_guessed_letters array
        user_guessed_letters.push(userGuess);
        
        
        // determine how many guesses the user has remaining
        guessesRemaining = (computerWordLength - user_guessed_letters.length);
    
    }
    
    console.log(wrong_guesses.length);
    // End game if user guessed 6 incorrect guesses
    if (wrong_guesses.length === incorrect_guesses || guessesRemaining === 0) {
        
        losses ++;
        
        wrong_guesses = [];
        correct_guesses = 0;
        incorrect_guesses = 6;
        
        guessesRemaining = 0;
        computerWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        guessesRemaining = computerWord.length;

        user_guessed_letters = [];
        
        computerWordList = [];
        for (var i = 0; i < computerWord.length; i++) {
            if (computerWord.charAt(i) !== " ") {
                computerWordList.push("_");
            }
            else {
                computerWordList.push("+");
            }
        };

        computerWordString = "";
        for (var i = 0; i < computerWord.length; i++) {
            if (computerWord.charAt(i) !== " ") {
                computerWordString += "_ ";
            }
            else {
                computerWordString += computerWord.charAt(i) + " ";
            }
        }


        alert("GAME OVER!");
        console.log(computerWord);
        console.log(losses);

    }

    

};



