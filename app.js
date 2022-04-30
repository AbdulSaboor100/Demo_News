let title = document.getElementById("title");
let text = document.getElementById("text");
let src = document.getElementById("src");

let newsDemoData = [
  {
    title: "LIVE: GREG INGLIS TO ANNOUNCE NRL RETIREMENT",
    text: "Greg Inglis has arrived at South",
    src: "./images/inglis_2.jpg",
  },
];

function bodyLoad() {
  newsDemoData.map((item, index) => {
      title.innerHTML = item.title;
      text.innerHTML = item.text;
      src.innerHTML = item.src;
  });
}
