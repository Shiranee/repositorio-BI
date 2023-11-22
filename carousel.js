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
  let carouselContent = document.querySelector('#content');
  let newButton = document.createElement("button");

  // Set the class attribute
  newButton.setAttribute("class", "item");

  // Set the onclick attribute
  newButton.setAttribute("onclick", `changeDashboard('${dashLibrary.link[x]}')`);

  // Create an image element and set its src attribute
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", `${dashLibrary.image[x]}`);

  // Create a bold element for "Placeholder 1"
  let boldElement = document.createElement("b");
  boldElement.appendChild(document.createTextNode(`${dashLibrary.name[x]}`));

  // Append the image and bold elements to the button
  newButton.appendChild(imgElement);
  newButton.appendChild(boldElement);

  // Append the button to the body or another container element
  carouselContent.appendChild(newButton);
  carouselContent.appendChild(newButton);
  x++;
}