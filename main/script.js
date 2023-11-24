/* function createTagElement(tagName, htmlTag) {
  class CustomElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = htmlTag;
    }
  }
  customElements.define(tagName, CustomElement);
}

let headerTag = `
<header>
  <div id="home-page">
        <a href="/index.html" style="text-decoration:none" >
          <svg id = "home-btn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#000000}</style><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          <p><b>Home</b></p>
        </a>
  </div>
  
  <div class="wrap-collabsible"> <input id="collapsible" class="toggle" type="checkbox"> <label for="collapsible"class="lbl-toggle">Dashboards</label>
    <div class="collapsible-content">
      <div class="content-inner">
        <div class="dash-selector">
      
        <div class="container">
        <button class="arrow-left control" aria-label="Previous image">◀</button>
        <button class="arrow-right control" aria-label="Next Image">▶</button>
        <div class="gallery-wrapper">
          <div class="gallery">
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
              <a href="/dashboard.html"><button class="item current-item"><img src="/images/char 11.png"><b>E-commerce</b></button></a>
          </div>
        </div>
      </div>
      
        </div>
      </div>
    </div>
  </div>
  <script src="carousel.js"></script>
</header>
`;

createTagElement('my-header', headerTag); */

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));