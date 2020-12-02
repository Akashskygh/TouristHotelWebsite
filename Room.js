var Index_Of_slide = 1;
ImageSlides(Index_Of_slide);


function plusSlides(n) {

  ImageSlides(Index_Of_slide += n);
}


function currentSlide(n) {

  ImageSlides(Index_Of_slide = n);
}

function ImageSlides(n) {

  var i;
  var images = document.getElementsByClassName("mySlides");
  var arrow = document.getElementsByClassName("dot");

  if (n > images.length) {Index_Of_slide = 1}
  if (n < 1) {Index_Of_slide = images.length}

  for (i = 0; i < images.length; i++) {

      images[i].style.display = "none";

  }

  for (i = 0; i < arrow.length; i++) {
      arrow[i].className = arrow[i].className.replace(" active", "");
  }

  images[Index_Of_slide-1].style.display = "block";
  arrow[Index_Of_slide-1].className += " active";
}