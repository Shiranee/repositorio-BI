const changeDashboard = function (newLink) {
  let dashLink = document.querySelector(".dash-page");
  dashLink.setAttribute("src", newLink);
}

let dashLibrary = {
    name: ['Dashboard E-commerce', 'Personal Shoppers E-commerce', 'Produto E-Commerce', 'Acompanhamento Influencers', 'Supervisão Varejo', 'Diretoria Varejo', 'Ranking Outlets', 'Ranking Lps', 'Ranking Studios', 'Ranking Franquias']
  , image:['/images/char 11.png', '/images/char 11.png', '/images/char 11.png']
  , circleTrough:[true, true, true]
 , circleTime: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
  , link: [
      'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
    // , 'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
 ]
};

let htmlButtonOutput = [];

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

  let boldElement = document.createElement("b");
  boldElement.style.whiteSpace = "pre-line";
  boldElement.appendChild(document.createTextNode(`${dashLibrary.name[x].replace(/ /g, "\n")}`));

  newButton.appendChild(imgElement);
  newButton.appendChild(boldElement);

  // Append the button to the body or another container element
  carouselContent.appendChild(newButton);
  carouselContent.appendChild(newButton);
  x++;
}

let stopLoop = false;

let btns = document.querySelectorAll('.item');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    stopLoop = true;
  });
});

async function updateDashLinks() {
  x = 0;
  let loopDashLink = document.querySelector('.dash-page');

  while (!stopLoop) {
    if(x === dashLibrary.link.length){
      x = 0;
    } else if (!dashLibrary.circleTrough[x]) {
      x++;
    } else {
      loopDashLink.setAttribute("src", `${dashLibrary.link[x]}`);
      
      // Use a delay function (in this case, using setTimeout)
      await new Promise(resolve => setTimeout(resolve, dashLibrary.circleTime[x]));

      x++;
    }
  }
}
// Call the function to start the loop
updateDashLinks();