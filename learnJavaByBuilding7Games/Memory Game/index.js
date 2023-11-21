const cardArray = [
  {
    name: "Fries",
    img: "/images/fries.png",
  },
  {
    name: "Hotdog",
    img: "/images/hotdog.png",
  },
  {
    name: "Cheeseburger",
    img: "/images/cheeseburger.png",
  },
  {
    name: "Icecream",
    img: "/images/icecream.png",
  },
  {
    name: "Milkshake",
    img: "/images/milkshake.png",
  },
  {
    name: "Pizza",
    img: "/images/pizza.png",
  },
  {
    name: "Fries",
    img: "/images/fries.png",
  },
  {
    name: "Hotdog",
    img: "/images/hotdog.png",
  },
  {
    name: "Cheeseburger",
    img: "/images/cheeseburger.png",
  },
  {
    name: "Icecream",
    img: "/images/icecream.png",
  },
  {
    name: "Milkshake",
    img: "/images/milkshake.png",
  },
  {
    name: "Pizza",
    img: "/images/pizza.png",
  },
];

// Need to put these in grid randomly //

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

// Now need a function for show the grid//

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
  }
}
createBoard();
