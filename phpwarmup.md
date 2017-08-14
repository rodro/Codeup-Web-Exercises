================================= WARM UP

Pair up...

Together, answer the following questions...

    What is the difference between a static and non-static property / method?
    What is the difference between the "self" and "$this" keyword?
    What is the scope resolution operator?

Together, write a class called "StringTransform"...

    Add a static property called $stringTest and set it equal to the string "test".

    Add the following static methods:

        isLetter()
            - method takes in a character and returns true if it is a letter and false if it is not
            - pass in the parameter to the built in PHP function: ctype_alpha( )
            - method takes in a string and returns the string with only the first and last letters lower-cased (all other letters should be capiltalized)

        secondCharCap()
            - capitalize the second character of passed in string if it exists and is a lowercase letter

        ********* IF TIME PERMITS, ADD THE FOLLOWING METHOD *********

        firstLastUpper()
            - method takes in a string and returns the string with only the first and last characters capitalized if the first and (or) last character(s) of the string is a letter

            testInput = "1test1"    testOuput = "1test1"
            testInput = "aardvark"  testOutput = "AaardvarK"
            testInput = "1fred"     testOutput = "1freD"
