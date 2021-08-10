/// Arrays intro ///
/// Think of arrays as lists/groups/collections
let handOfCards = ["6 of Hearts"]; //square brackets indicates an array
console.log ('handOfCards', handOfCards);
console.log( 'type of handOfCards: ', typeof handOfCards);

handOfCards.push( '3 of Diamonds'); // Adds to end of Array
console.log ('handOfCards: ', handOfCards);

handOfCards.push( 'Ace of Spades')  // Adds to end of Array
console.log ('handOfCards: ', handOfCards);

handOfCards.push( 'Jack of Diamonds')  // Adds to end of Array
console.log ('handOfCards: ', handOfCards);

handOfCards.unshift( '9 of Clubs'); // Adds to start of Array
console.log ('handOfCards: ', handOfCards); 

handOfCards.shift(); //removes the first element from an array
console.log ('handOfCards: ', handOfCards);

handOfCards.push( '7 of Clubs'); // adds to end of an array
console.log ('handOfCards: ', handOfCards);

handOfCards.pop(); // removes the last element of an array
console.log ('handOfCards: ', handOfCards);

handOfCards[2]; // identify/accesses the 2nd (index #) item in the array
console.log ('handOfCards: ', handOfCards);

//remove one card starting at this index
handOfCards.splice( 2,1 ); //first number is the index number, the second is the number of items to remove
console.log ('handOfCards: ', handOfCards);

/// GROUP ACTIVITY - https://github.com/PrimeAcademy/ionianArrays ///

/// ACTIVIY PART 1

// create an array variable that starts out empty:

let catEmojis = []

// push the two tallest members of your group by name one at a time - eg: group.push( 'Commander Wisdom' ) )
catEmojis.push('CJ');
console.log ( 'catEmojis,', catEmojis);
catEmojis.push('Faisal');
console.log ( 'catEmojis,', catEmojis);

// unshift the remaining members of the group

catEmojis.unshift( 'Paran');
console.log ( 'catEmojis,', catEmojis);
catEmojis.unshift( 'Hannah');
console.log ( 'catEmojis,', catEmojis);
catEmojis.unshift( 'Chris')
console.log ( 'catEmojis,', catEmojis);

// TEST ADDS
//catEmojis.push('Peter','Paul');
//console.log ( 'catEmojis,', catEmojis);

/// ACTIVITY PART 2

// sort your group alphabetically using pop, shift, and splice as you see fit
// you cannot create new members, only reorder them
//hint 0: create a variable named "removedMember" and use it to store the member most recently removed - eg: removedMember = group.pop()
// hint 1: you can then re-insert this user with push or unshift - eg: group.unshift( removedMember )

let removedMember = catEmojis.splice( 1, 2); //removed members Hannah and Paran
console.log ( 'removedMember', removedMember);
console.log ( 'catEmojis,', catEmojis);

//catEmojis.push( removedMember[0], removedMember [1]);  //adds removedMember values
//console.log ( 'catEmojis,', catEmojis);

catEmojis.push( ...removedMember); // attempt to push array values into another array
console.log ( 'catEmojis,', catEmojis);




