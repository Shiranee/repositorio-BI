// let dashLibrary = {
//   name: ['placeHolder1', 'placeHolder2', 'placeHolder3']
//   , link: [
//       'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
//     , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
//     , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
//   ]
//   , image:['/images/char 11.png', '/images/char 11.png', '/images/char 11.png']
// };

let dashLibrary = {
  name: ['Faturamento E-commerce', 'Personal Shoppers E-commerce', 'Produto E-Commerce', 'Acompanhamento Influencers', 'Supervisão Varejo', 'Diretoria Varejo', 'Ranking Outlets', 'Ranking Lps', 'Ranking Studios', 'Ranking Franquias']
  , link: [
        'https://powerbi.liveoficial.com.br/powerbi/d780dda7a988376b232a588e9a30ae3e'
      , 'https://app.powerbi.com/view?r=eyJrIjoiMmU1MjFhNjktYzkxZC00OTcxLTgxZTEtZmQ0OGUyYmU4ZTBkIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiZGM1OGJhZGQtZTk2Mi00MmY0LWJkYTktZjRmZGYzZGEwMmI2IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiMmY4MzBmYjktNmU5My00YTA0LWJiNGMtNWZlMjY5ODJmODYwIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiNWQ0ZjVjNzMtNDljZC00MTg5LTg1ZWUtNjNiMzk1NTRmMzc5IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiYTVmZDJjMzEtNzM2Zi00ZGJhLWEyMDAtODVhOTVjYTI2NWRhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiNjI3ZGJmMGMtOWI3Yy00YjU0LWFhNzUtNmFiMWI2MTdlM2JjIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiNDk3NmZkYTctMjJjNi00ZWZiLTg4N2ItZmFlZWFjYzY5MzFjIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiZmUzNjJjMTYtMGU3My00YWZlLTgyZTUtMWUxZmIxYTgxNDkxIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
      , 'https://app.powerbi.com/view?r=eyJrIjoiNmU3YmE4MmMtYTYyYi00NTY0LWJhOWItYzBlZGIwY2VjNzFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
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
  imgElement.setAttribute("src", `${dashLibrary.image[0]}`);

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

