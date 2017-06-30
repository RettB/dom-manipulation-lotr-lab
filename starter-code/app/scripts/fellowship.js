console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
var rivendell;


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var map = document.createElement('section');
  map.setAttribute('id','middle-earth');
  // inside, add each land as an article tag
  lands.forEach(function(land) {
    var region = document.createElement('article');
  // inside each article tag include an h1 with the name of the land
  var regionName = document.createElement('h1');
  regionName.textContent = land;
  region.appendChild(regionName);
  map.appendChild(region);
});
  // append middle-earth to your document body
body.appendChild(map);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var list = document.createElement('ul');
  hobbits.forEach(function(hobbit) {
    var tinyPeople = document.createElement('li');
    tinyPeople.textContent = hobbit;
  // give each hobbit a class of hobbit
    tinyPeople.setAttribute('class','hobbit');
    list.appendChild(tinyPeople);
  });
  var shire = document.querySelector('article');
  shire.appendChild(list);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement('div');
  ring.setAttribute('id','the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute('class','magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  var frodo = document.querySelector('li');
  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var budsUl = document.createElement('ul');
    for(var i=0;i<buddies.length;i++){
      var budsLi = document.createElement('li');
      var budsContent = document.createTextNode(buddies[i]);
      budsLi.appendChild(budsContent);
      budsUl.appendChild(budsLi);
    }
  // insert your aside as a child element of rivendell
  aside.appendChild(budsUl);
  rivendell = document.querySelector('article').nextSibling;
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = document.querySelector('aside').firstChild.childNodes[3];
  aragorn.textContent = 'Aragorn';
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var leave = document.querySelector('ul');
  rivendell.appendChild(leave);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
  fellowship.setAttribute('id','the-fellowship');
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var travelers1 = document.querySelector('ul li');
  var travelers2 = document.querySelector('ul li').nextSibling;
  var travelers3 = document.querySelector('ul').childNodes[2];
  var travelers4 = document.querySelector('ul').lastChild.previousSibling;
  var travelers5 = document.querySelector('ul').lastChild;
  var travelers6 = document.querySelector('.hobbit');
  var travelers7 = document.querySelector('.hobbit').nextSibling;
  var travelers8 = document.querySelector('.hobbit').parentNode.lastChild;
  var travelers9 = document.querySelector('.hobbit').parentNode.lastChild.previousSibling;

  fellowship.appendChild(travelers1);
  fellowship.appendChild(travelers2);
  fellowship.appendChild(travelers3);
  fellowship.appendChild(travelers4);
  fellowship.appendChild(travelers5);
  fellowship.appendChild(travelers6);
  fellowship.appendChild(travelers7);
  fellowship.appendChild(travelers8);
  fellowship.appendChild(travelers9);

  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
