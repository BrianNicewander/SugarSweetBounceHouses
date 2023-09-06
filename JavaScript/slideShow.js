// slide show javascript

// This is the spot the slide show starts on and is on
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("slideshow");
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

  slides[slideIndex - 1].style.display = "block";
}