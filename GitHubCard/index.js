/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";

// console.log(axios);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>

    img url`
    name`
    username`
    location`
    profile address`
    follower count
    following count
    bio
*/

const elementMaker = function (element, textAdd, ...classes) {
  let newElement = document.createElement(element);
  newElement.textContent = textAdd;
  if (classes.length > 0) {
    newElement.classList.add(classes.toString());
  }
  return newElement;
};
const pseudoAppendChildBecauseMS = function (parentEl, ...childEls) {
  childEls.forEach((child) => parentEl.appendChild(child));
  return parentEl;
};

// console.log(`function test`
//   pseudoAppendChildBecauseMS(
//     elementMaker(`div`, `bigdiv`),
//     elementMaker(`div`, `little div1`),
//     elementMaker(`div`, `little div2`)
//   )
// );

// How to automatically create and populate variables with all keys from object?
//
//
const userCardMaker = function ({
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  let card = elementMaker(`div`, ``, `card`);
  let resAvatarImg = elementMaker(`img`);
  resAvatarImg.src = avatar_url;
  let card_info = elementMaker(`div`, ``, `card-info`);
  let resName = elementMaker(`h3`, name, `name`);
  let resUsername = elementMaker(`p`, login, `username`);
  let resLocation = elementMaker(`p`, location);
  let resProfileURL = elementMaker(`a`, html_url);
  resProfileURL.href = html_url;
  let profile = elementMaker(`p`, `Profile: ${resProfileURL}`);
  let resFollowerNum = elementMaker(`p`, `Followers: ${followers}`);
  let resFollowingNum = elementMaker(`p`, `Following: ${following}`);
  let resBio = elementMaker(`p`, bio);

  pseudoAppendChildBecauseMS(card, resAvatarImg, card_info);
  pseudoAppendChildBecauseMS(
    card_info,
    resName,
    resUsername,
    resLocation,
    profile,
    resFollowerNum,
    resFollowingNum,
    resBio
  );

  return card;
};

let cards = document.querySelector(`.cards`);

axios
  .get(`https://api.github.com/users/abe-one`)
  .then((res) => {
    cards.appendChild(userCardMaker(res.data));
  })
  .catch()
  .finally();

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
