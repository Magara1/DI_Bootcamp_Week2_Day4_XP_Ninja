

// 1 - create a function that takes a string as an argument

function capitalize(character) {

    /**
     * @description : cette fonction permet de mettre les lettres une chaine de
     * caractère en majuscules en fonction de l'indices des caractères et retourne
     * un tableau des 2 possibles combinaison (les indices paires en majuscules dans le premiers
     * élément du tableau et les indices impaires en miniscules dans le second élément du
     * tableau)
     * @param character -> chaine à traiter
     * @param  newWord1 -> chaine transformé
     * @param newWord -> chaine transformé
     * @returns capitalizedTable;
     */

    let capitalizedTable = [];
    let newWord = "";
    let newWord1 = "";

    if(character.split(" ").length > 1) {

        console.log("character should'nt have space");
        return;

    }

    for(let i = 0; i < character.length; i++) {

        if(i % 2 == 0) {
            newWord += character.charAt(i).toUpperCase();
            newWord1 += character.charAt(i)
        }
        else {
            newWord += character.charAt(i)
            newWord1 += character.charAt(i).toUpperCase();
        }
    }

    capitalizedTable.push(newWord);
    capitalizedTable.push(newWord1);

    return capitalizedTable;

}

capitalize("abcdef");
