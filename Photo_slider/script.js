const selecedPhotos = ["./img/092bb7406c316eb2e7d9b6891c1b4b23.jpg", "./img/1638350067_8c7dd922ad47494fc02c388e12c00eac.jpg", "./img/wide_detail_picture.jpg"]

const photoSlider = document.querySelector(".slideshow-container")
selecedPhotos.forEach(element => {
    photoSlider.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="mySlides fade">
          <img class="slider-photos" src="${element}" style="width:700px">
        </div>
        `
    );
})

let slideIndex = 1;
showSlides(slideIndex);

const nextButton = document.querySelector(".next")
nextButton.addEventListener('click', function(){
    showSlides(slideIndex += 1);
});
const prevButton = document.querySelector(".prev")
prevButton.addEventListener('click', function(){
    showSlides(slideIndex -= 1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}