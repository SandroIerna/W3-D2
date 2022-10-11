/* EXERCISE 1
       Write a function for changing the title of the document in something else.
      */

const changeTitle = function (event) {
  let h1 = document.querySelector("h1");
  console.log(h1);
  const input = event.target;
  h1.innerText = input.value;
};
const changeTitleConsole = function (newTitle) {
  let h1 = document.querySelector("h1");
  h1.innerText = newTitle;
};

/* EXERCISE 2
       Write a function for changing the class of the title of the page in "myHeading".
      */

const addClassToTitle = function () {
  let h1 = document.querySelector("h1");
  console.log(h1);
  h1.classList.toggle("myHeading");
};

/* EXERCISE 3
       Write a function for changing the text of only the p which are children of a div.
      */

const changePcontent = function (event) {
  let pChild = document.querySelectorAll("div > p");
  console.log(pChild);
  for (let i = 0; i < pChild.length; i++) {
    const input = event.target;
    pChild[i].innerText = input.value;
  }
};

/* EXERCISE 4
       Write a function for changing the href property of every link to https://www.google.com
      */

const changeUrls = function () {
  let newLink = document.querySelectorAll("a");
  for (let i = 0; i < newLink.length; i++) {
    newLink[i].href = "https://www.google.com";
    newLink[i].innerText = "This link goes to google";
  }
};

/* EXERCISE 5
       Write a function for adding a new list item in the second unordered list.
      */

const addToTheSecond = function (event) {
  const ul = document.getElementById("secondList");
  const newli = document.createElement("li");
  const input = event.target;
  newli.innerText = input.value;
  ul.appendChild(newli);
};

/* EXERCISE 6
       Write a function for adding a second paragraph to the first div.
      */

const addParagraph = function (content) {
  const firstDiv = document.querySelectorAll("div")[2];
  console.log(firstDiv);
  const newP = document.createElement("p");
  newP.innerText = "new paragraph";
  firstDiv.appendChild(newP);
};

/* EXERCISE 7
       Write a function for making the first unordered list disappear.
      */

const firstUlDisappear = function () {
  const firstUl = document.getElementById("firstList");
  firstUl.classList.toggle("hidden");
};

/* EXERCISE 8
       Write a function for making the background of every unordered list green.
      */

const paintItGreen = function () {
  const ul = document.querySelectorAll("ul");
  console.log(ul);
  for (let i = 0; i < ul.length; i++) {
    console.log(ul[i]);
    ul[i].style.background = "green";
  }
};

/* EXERCISE 9
       Make the heading of the page change color every time the user clicks on it.
      */

const makeItClickable = function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rGB = "rgb(" + red + ", " + green + ", " + blue + ")";
  let heading = document.querySelector("div");
  heading.style.color = rGB;
};

/* EXERCISE 10
       Change the footer text with something else when the user clicks on it.
      */

const changeFooterText = function () {
  const footer = document.getElementById("footer");
  footer.innerText = "ooooops, the text changed!";
};

/* EXERCISE 11
       Attach an event listener to the input field in the page that changes the text of the page's subtitle
      */
const changeSubtitle = function (event) {
  let subtitle = document.querySelector("h2");
  const input = event.target;
  subtitle.innerText = input.value;
};

const inputField = document.getElementById("input-field");
// ...

/* EXERCISE 12
       Attach an event listener to the input field in the page that changes the text of the page's subtitle
      */

window.onload = function () {
  //
};

/* EXERCISE 13
       Use HTML5 tags to properly provide semantic meaning to the different portions of the page.
      */

/* ### EXTRA ###  EXERCISE 14
       Create an input of type "color" and use it to change the color of the subtitle
      */
