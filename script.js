const checkboxes = document.querySelectorAll('.card-checkbox');
let firstCard, secondCard;

function handleCheck() {
    if (this !== firstCard) {
        secondCard = this;

        if (firstCard && secondCard) {
            if (firstCard.nextElementSibling.querySelector('img').src === secondCard.nextElementSibling.querySelector('img').src) {
                firstCard.checked = true;
                secondCard.checked = true;
                firstCard = null;
                secondCard = null;
            } else {
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

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

const cards = document.querySelectorAll('.card-label');
const imgUrls = [  'https://picsum.photos/200?random=1',  'https://picsum.photos/200?random=2',  'https://picsum.photos/200?random=3'];

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(imgUrls);

for (let i = 0; i < cards.length; i++) {
  cards[i].querySelector('img').src = imgUrls[i % imgUrls.length];
}
