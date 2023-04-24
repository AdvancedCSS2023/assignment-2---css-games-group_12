// Select all elements with the class 'card-checkbox' and store them in the 'checkboxes' variable
const checkboxes = document.querySelectorAll('.card__checkbox');
// Create variables 'firstCard' and 'secondCard'
let firstCard, secondCard;

// Defining 'handleCheck' and making a function out of it
function handleCheck() {
    // If the clicked checkbox is not the same as 'firstCard', then put 'secondCard' to the clicked checkbox
    if (this !== firstCard) {
        secondCard = this;

        // Making an if statement when both 'firstCard' and 'secondCard are defined
        if (firstCard && secondCard) {
             // and if the images of both 'firstCard' and 'secondCard' are the same
            if (firstCard.nextElementSibling.querySelector('img').src === secondCard.nextElementSibling.querySelector('img').src) {
                // Set both checkboxes to checked and reset both 'firstCard' and 'secondCard' to null
                firstCard.checked = true;
                secondCard.checked = true;
                firstCard = null;
                secondCard = null;
                // If the cards are different, then uncheck the checkboxes and reset them to null after 1000ms/1 second
            } else {
                   // If 'firstCard' is not defined, set it to the clicked checkbox
                setTimeout(() => {
                    firstCard.checked = false;
                    secondCard.checked = false;
                    firstCard = null;
                    secondCard = null;
                }, 1000);
            }
        } else {
            firstCard = this;
        }
    }
}

// Add event listeners to all checkboxes, and making a click function on the 'handleCheck'.
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
// Select all elements with the class 'card-label' and store them in the 'cards' variable
const cards = document.querySelectorAll('.card__label');

const img = [ './images/african-village.jpeg',  './images/plane.jpeg',  './images/university.jpeg', './images/water.jpeg'];


// This code shuffels the order of the cards at random (the array), by defining the 'shuffle' function.
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    // pick a random index from 0 to currentINdex -1
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
     // Swap the element at the current index with the element at the random index
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
// Return the shuffled array
  return array;
}

// Calling the 'shuffel' function with the 'imgUrls' array as argument, which shuffles the array in place
shuffle(imgUrls);


shuffle(img);


// Set the 'src' attribute of each image in the 'cards' array to a shuffled image URL
// The modulus operator (%) ensures that the shuffled URL are repeated if there are more cards than URL
for (let i = 0; i < cards.length; i++) {
  cards[i].querySelector('img').src = img[i % img.length];
}

