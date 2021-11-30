/* ********************************************* */
/* Timer function for header countdown-timer     */
/* ********************************************* */

const today = new Date();
const countDownDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
/*
  Substitute line above for line below, if an exact date is wanted
  ** const countDownDate = new Date("Oct 20, 2022 00:00:00").getTime(); **
*/


const x = setInterval(function () {
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days +
        " dager " +
        hours +
        " timer " +
        minutes +
        " minutter " +
        seconds +
        " sekunder ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

/* ********************************************* */
/*            Google Maps API integration        */
/* ********************************************* */


// Initialize and add the map
function initMap() {
  const sandneshallen = { lat: 58.88436676964145, lng: 5.739359374042154 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: sandneshallen,
  });
  
  const marker = new google.maps.Marker({
    position: sandneshallen,
    map: map,
  });
}

/* ********************************************* */
/*            Slideshow interval timer           */
/* ********************************************* */

let counter = 1;
setInterval(function() {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if(counter > 4) {
    counter = 1;
  }
}, 5000);


/* ********************************************* */
/*   Lazy loading images (e-sport & program)     */
/* ********************************************* */

const faders = document.querySelectorAll('.fade-in', '.fixed-arrow');

const appearOptions = {
  threshold: .4,
  rootMargin: "0px 0px -175px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries, 
  appearOnScroll
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })