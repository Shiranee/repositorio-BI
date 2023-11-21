const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

let dashLibrary = {
  name: ['placeHolder1', 'placeHolder2', 'placeHolder3']
  , link: [
      'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  ]
  , image:['/images/char 11.png', '/images/char 11.png', '/images/char 11.png']
};

const changeDashboard = function (newLink) {
  let dashLink = document.querySelector(".dash-page");
  dashLink.setAttribute("src", newLink);
}

let htmlButtonOutput = [];
let htmlDashOutput = [];

let x = 0;

while (x < dashLibrary.link.length) {
  let dashboardButton = `<button class="item current-item" onclick="changeDashboard('${dashLibrary.link[x]}')"><img src="${dashLibrary.image[x]}"><b>${dashLibrary.name[x]}</b></button>`;
  htmlButtonOutput.push(dashboardButton);
  x++;
}

console.log(dashLibrary.name[0], dashLibrary.link.length, htmlButtonOutput);

function createTagElement(tagName, htmlTag) {
  class CustomElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = htmlTag;
    }
  }
  customElements.define(tagName, CustomElement);
}

createTagElement('dash-btn', htmlButtonOutput);


// console.log(...htmlButtonOutput);
// console.log(...htmlDashOutput);


// const button_1 = document.querySelector('.btn-1');
// const button_2 = document.querySelector('.btn-2');

// function logging() {console.log('btn clicked')};

// button_1.addEventListener('click', logging);
// button_2.addEventListener('click', logging);

// let dashboardIframe = `<iframe class = "dash-page" title="dash-produtos" src="${dashLibrary.link[x]}" frameborder="0" allowFullScreen="true"></iframe>`;
// htmlDashOutput.push(dashboardIframe);