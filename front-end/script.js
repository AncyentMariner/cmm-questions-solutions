function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const friends = [ 
  { name: 'Ray', color: 'red', background: 'blue' },
  { name: 'Oscar', color: 'orange', background: 'black' },
  { name: 'Gwen', color: 'green', background: 'purple' },
  { name: 'Bob', color: 'blue', background: 'orange' },
  { name: 'Marie', color: 'magenta', background: 'teal' }
]
const randomFriends = shuffle(friends)

for (f in randomFriends) {
  let paragraph = document.createElement('p')
  paragraph.innerHTML = randomFriends[f].name
  document.body.appendChild(paragraph)

  paragraph.setAttribute('style', `background-color: ${randomFriends[f].background}; color: ${randomFriends[f].color}`)
  paragraph.classList.add('fun')
  paragraph.classList.add('center')
}
