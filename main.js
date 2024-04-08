let firstVisibleIndex = 0;
let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName("li");

let elementsToShow = 3;
if (document.body.clientWidth < 1000) {
  elementsToShow = 1;
} else if (document.body.clientWidth < 1500) {
  elementsToShow = 2;
}

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + "px";
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + "px";
}

function prev() {
  if (firstVisibleIndex > 0) {
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
    firstVisibleIndex--;
  } else {
    // Jika mencapai elemen pertama, geser ke elemen terakhir
    slider.style.transition = 'none'; // Matikan transisi sementara
    slider.style.marginLeft = '-' + (cardWidth * (cards.length - elementsToShow)) + 'px';
    firstVisibleIndex = cards.length - elementsToShow;
    setTimeout(() => {
      slider.style.transition = 'margin 1s'; // Hidupkan transisi kembali
    }, 0);
  }
}

function next() {
  if (firstVisibleIndex < cards.length - elementsToShow) {
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
    firstVisibleIndex++;
  } else {
    // Jika mencapai elemen terakhir, geser ke elemen pertama
    slider.style.transition = 'none'; // Matikan transisi sementara
    slider.style.marginLeft = '0';
    firstVisibleIndex = 0;
    setTimeout(() => {
      slider.style.transition = 'margin 1s'; // Hidupkan transisi kembali
    }, 0);
  }
}
