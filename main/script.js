let dashLibrary = {
  name: [
    'Dashboard E-commerce'
  , 'Personal Shoppers E-commerce'
  , 'Produto E-Commerce'
  , 'Acompanhamento Influencers'
  , 'Supervisão Varejo'
  , 'Diretoria Varejo'
  , 'Ranking Outlets'
  , 'Ranking Lps'
  , 'Ranking Studios'
  , 'Ranking Franquias'
]
  , image:['/images/char 11.png', '/images/char 11.png', '/images/char 11.png']
, circleTrough:[true, true, true, true, true]
, circleTime: [1005000, 5000, 5000, 6000, 7000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]
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
  x++;
}

let dashIframe = document.querySelector('.dash-page');
let btns = document.querySelectorAll('.item');
let timeCounter = document.getElementById('countdown');
let intervalId;
let stopLoop = false;

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    stopLoop = true;
    clearInterval(intervalId);
    timeCounter.textContent = '';
  });
});

const changeDashboard = function (newLink) {
  // Encode the link to ensure it's a valid URL parameter
  const encodedLink = encodeURIComponent(newLink);

  // Check if already on dashboard.html
  if (!window.location.pathname.includes('dashboard.html')) {
    // Redirect to dashboard.html with the new link as a parameter
    window.location.href = `dashboard.html?dashboardLink=${encodedLink}&stopLoop=true`;
  } else {
    // If already on dashboard.html, update the iframe directly
    dashIframe.setAttribute('src', newLink);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // let dashIframe = document.querySelector('.dash-page');
  let urlParams = new URLSearchParams(window.location.search);
  let encodedLink = urlParams.get('dashboardLink');
  let stopLoopFlag = urlParams.get('stopLoop');

  if (stopLoopFlag === 'true') {
    stopLoop = true;
    clearInterval(intervalId);
    timeCounter.textContent = '';
  }

  if (encodedLink) {
    // Decode the link to get the original URL
    let newLink = decodeURIComponent(encodedLink);
    
    // Assuming dashIframe is the iframe on dashboard.html
    dashIframe.setAttribute('src', newLink);
  }
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