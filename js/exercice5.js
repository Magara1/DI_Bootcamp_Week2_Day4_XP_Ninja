


// Write a JS function that takes an array and returns a new array with only unique elements

function uniqueElements(array) {

    /**
     * @description cette fonction permet de supprimer les doublons dans une liste
     */

    let uniqueElementsList = array.filter((x, i) => array.indexOf(x) === i);
    return uniqueElementsList;

}

uniqueElements([1,2,3,3,3,3,4,5]);