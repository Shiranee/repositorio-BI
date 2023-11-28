let dashLibrary = {
  name: ['Dashboard E-commerce', 'Personal Shoppers E-commerce', 'Produto E-Commerce', 'Acompanhamento Influencers', 'Supervisão Varejo', 'Diretoria Varejo', 'Ranking Outlets', 'Ranking Lps', 'Ranking Studios', 'Ranking Franquias']
, image:['/images/char 11.png', '/images/char 11.png', '/images/char 11.png']
, circleTrough:[true, true, true]
, circleTime: [5000, 5000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
, link: [
    'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiOTAxZTQyYWMtYTBjNS00YzMxLWFkYWUtMGQ0ZWVmYWJhYWFhIiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiYWE3ZjUwNGMtMmM3ZS00YjM1LWI4YWUtZTNkNjc1NWVjMmM4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
  , 'https://app.powerbi.com/view?r=eyJrIjoiMjgxYzA2ZTAtY2EwMi00YjhkLWFiN2UtZmEzZjBiYTY4MzA4IiwidCI6IjFlZDE4MWUzLWJjNTQtNDAyYi1hZTBmLTI1NDk1NjZmZjMxNSJ9'
]
};

let x = 0;

//creates each button in the loop
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

let dashIframe = document.querySelector('.dash-page');
let btns = document.querySelectorAll('.item');
let timeCounter = document.getElementById('countdown');
let intervalId;
let stopLoop = false;

const changeDashboard = function (newLink) {
  dashIframe.setAttribute("src", newLink);
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    stopLoop = true;
    // console.log(`clicked`)
    clearInterval(intervalId);
    timeCounter.textContent = '';
  });
});

// Function to update the countdown
function updateCountdown(timer) {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  // Display the countdown in the "countdown" div
  timeCounter.textContent = `Próxima troca: \n ${minutes}m ${seconds}s`;

  // Check if the countdown has reached zero
  if (timer === 0) {
    return timer = timer / 1000;
  } else {
    // Decrease the countdown time by 1 second
    return timer-1;
  }
}

async function updateDashLinks() {
  x = 0;

  while (!stopLoop) {
    let countdownTime = dashLibrary.circleTime[x] / 1000;

    if(x === dashLibrary.link.length){
      x = 0;
    } else if (!dashLibrary.circleTrough[x]) {
      x++;
      continue
    } else {
      dashIframe.setAttribute("src", `${dashLibrary.link[x]}`);
      
      countdownTime = updateCountdown(countdownTime);
      
      // Call the updateCountdown function again every second
      intervalId = setInterval(function () {
        countdownTime = updateCountdown(countdownTime);
        if (countdownTime === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
      
      // Use a delay function (in this case, using setTimeout)
      await new Promise(resolve => setTimeout(resolve, dashLibrary.circleTime[x]));

      x++;
    }
  }
}
// Call the function to start the loop
updateDashLinks();