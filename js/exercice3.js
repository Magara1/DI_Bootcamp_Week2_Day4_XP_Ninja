

// 1 - Write a javascript function that checks whether a string is a palindrome or not

function isPalindrome(character) {

    /**
     * @description : cette fonction permet de vérifier si une chaine de caractère
     * est un palindrome, elle se base sur la parité du nombre de caratère de cette chaine
     * afin de savoir quel  traitement éffectué sur la chaine pour déterminer si
     * c'est un palindrome ou non.
     * @param middleOfCharacter
     * @param firstPartString
     * @param lastPartString
     * @param lastPartStringReverse
     * @returns booelan, if is true it mean that charcters in a palindrome else not
     */

    let middleOfCharacter = character.length / 2;
    let firstPartString = character.toLowerCase().slice(0, middleOfCharacter);
    let lastPartString = character.toLowerCase().slice((character.length % 2 == 0) ? middleOfCharacter : middleOfCharacter + 1);
    let lastPartStringReverse = lastPartString.split("").reverse().join("");

    if(firstPartString == lastPartStringReverse) {

        console.log("The entry is a palindrome");
        return true;

    }
    return false;
}

isPalindrome("madam");