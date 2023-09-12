// slide show javascript

// This is the spot the slide show starts on and is on
let slideIndex = 1;
showSlides(slideIndex);

// Next and previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

// This finds out how many slides there are and moves the slideIndex when you click next
function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
	{
    slideIndex = 1
  }

  if (n < 1) 
	{
    slideIndex = slides.length
  }

  // This takes every slide and sets the display to none
  for (i = 0; i < slides.length; i++) 
	{
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";
}