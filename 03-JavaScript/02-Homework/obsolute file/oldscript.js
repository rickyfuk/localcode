        // part 1 - Define the variable for the character
        // number 
        var num = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9];

        // Capital letter
        var capLetter = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"];

        // Lower Case Letter
        var letter = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"];

        // Special Character
        var specialChar = [
            "!",
            '"',
            "#",
            "$",
            "%",
            "&",
            "'",
            "(",
            ")",
            "*",
            "+",
            ",",
            "-",
            ".",
            "/",
            ":",
            ";",
            "<",
            "=",
            ">",
            "?",
            "@",
            "[",
            '\\',
            "]",
            "^",
            "_",
            "`",
            "{",
            "|",
            "}",
            "~"];
        // end of Part 1

        // name the function for html to identify
        function displayTheResult(){

        // Part 2 - Get the response from the user
        // set an array for the keeping the full chat base
        var fullChatArray = [];

        // Part 2a - Get the password length
        //Q1 prompt the question for the length requirment of the password 
        var passwordLength = prompt("How many characters do you need? (must between 8 to 128 characters)");

        // will keep asking until the result is between 8 to 128
        while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
            alert("Please enter a number between 8 to 128 only");
            passwordLength = prompt("How many characters do you need? (must between 8 to 128 characters)");
        }

        // Part 2b -Get the password char type

        // funtion for replacing the if case
        // function addToFullChatArray(need,charType){
        //     if (need){
        //         fullChatArray = fullChatArray.concat(charType);
        //     }
        // }
         
        //Q1 confirm if the password need to contain any numnber
        var needNum = confirm("Does your password need any number?");
        // add the number in to the fullChatArray if the response is positive
            if (needNum === true) {
                fullChatArray = fullChatArray.concat(num);
            }
            // drop the number from the fullChatArray if the response is negative
            else {
                fullChatArray = fullChatArray;
            }
            // addToFullChatArray(neednum,num);
        

        //Q2 confirm if the password need to contain any Capital Letter
        var needCapLetter = confirm("Does your password need any Capital Letter?");
        // add the Cap Letter in to the fullChatArray if the response is positive
        if (needCapLetter === true) {
            fullChatArray = fullChatArray.concat(capLetter);
        }
        // drop the Cap Letter from the fullChatArray if the response is negative
        else {
            fullChatArray = fullChatArray;
        }

        //Q3 confirm if the password need to contain any Lower Case Letter
        var needLetter = confirm("Does your password need any Lower Case Letter?");
        // add the lower case letter in to the fullChatArray if the response is positive
        if (needLetter === true) {
            fullChatArray = fullChatArray.concat(letter);
        }
        // drop the Lower Case Letter from the fullChatArray if the response is negative
        else {
            fullChatArray = fullChatArray;
        }

        //Q4  confirm if the password need to contain any Special Character
        var needSpecChar = confirm("Does your password need any Special Character?");
        // add the special char in to the fullChatArray if the response is positive
        if (needSpecChar === true) {
            fullChatArray = fullChatArray.concat(specialChar);
        }
        // drop the special Char from the fullChatArray if the response is negative
        else {
            fullChatArray = fullChatArray;
        }

        // will keep asking the char type until at least one is choosen
        while (
            (needNum === false) &&
            (needCapLetter === false) &&
            (needLetter === false) &&
            (needSpecChar === false)) {
            alert("Please choose at least one of the character type. (Number/Capital Letter/Lower Case Letter/Special Character)");
            //Q1 confirm if the password need to contain any numnber
            var needNum = confirm("Does your password need any number?");
            // add the number in to the fullChatArray if the response is positive
            if (needNum === true) {
                fullChatArray = fullChatArray.concat(num);
            }
            // drop the number from the fullChatArray if the response is negative
            else {
                fullChatArray = fullChatArray;
            }

            //Q2 confirm if the password need to contain any Capital Letter
            var needCapLetter = confirm("Does your password need any Capital Letter?");
            // add the Cap Letter in to the fullChatArray if the response is positive
            if (needCapLetter === true) {
                fullChatArray = fullChatArray.concat(capLetter);
            }
            // drop the Cap Letter from the fullChatArray if the response is negative
            else {
                fullChatArray = fullChatArray;
            }

            //Q3 confirm if the password need to contain any Lower Case Letter
            var needLetter = confirm("Does your password need any Lower Case Letter?");
            // add the lower case letter in to the fullChatArray if the response is positive
            if (needLetter === true) {
                fullChatArray = fullChatArray.concat(letter);
            }
            // drop the Lower Case Letter from the fullChatArray if the response is negative
            else {
                fullChatArray = fullChatArray;
            }

            //Q4 confirm if the password need to contain any Special Character
            var needSpecChar = confirm("Does your password need any Special Character?");
            // add the special char in to the fullChatArray if the response is positive
            if (needLetter === true) {
                fullChatArray = fullChatArray.concat(specialChar);
            }
            // drop the special Char from the fullChatArray if the response is negative
            else {
                fullChatArray = fullChatArray;
            }
        }
        // end of while loop
        // end of Part 2

        // Part 3 - Generate a password from the password Array
        // set the default password as empty (for the final output)
        var password = "";

        // set an array to store the temp result for final output
        var passwordArray = [];

        // A function to generate a random number
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        // A function to generate a single char
        function gernerateAChar() {
            var charSelectionCount = getRandomInt(fullChatArray.length);
            console.log(fullChatArray[charSelectionCount]);
            return fullChatArray[charSelectionCount];
        }

        // the following "for loop" is serve for: 
        // 1. keep the result for every char generate by function "generateAChar"
        // 2. add the new char to the password until the requirment met 
        for (var i = 0; i < passwordLength; i++) {
            passwordArray[i] = gernerateAChar();
            password = password + passwordArray[i];
            console.log(password);
            
        }

        // Part 4 - Return the password to html
        console.log(typeof password);
        document.getElementById("passwordResult").innerHTML = password;

        }
    
        // end function "displayTheResult"