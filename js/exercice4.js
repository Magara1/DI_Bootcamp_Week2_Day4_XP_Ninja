

// 1 - create function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number

function biggestNumberInArray(arrayNumber) {

    /**
     * @description : cette fonction permet trouver la plus grande valeur dans un tableau
     * et la retourne
     * @param arrayNumber -> le tableau à trier
     * @param biggestNumber -> 
     */

    if(arrayNumber.length > 0) {

        let biggestNumber = 0;

        for(let i of arrayNumber) {

            if(i > biggestNumber) {

                biggestNumber = i;

            }
        }
        return biggestNumber;
    }
    return 0;

}

biggestNumberInArray(['a', 3, 4, 2]);