$(document).ready(function(){
  //Smooth Scrolling
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
   
        window.location.hash = hash;
      });
    }
  });

  //Masonry Layout
  $('.grid').imagesLoaded(function() {
    $('.grid').animate({'opacity': 1});
    var masonry = new Masonry('.grid', {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      gutter: 20 
    }); 
  });

  //Parallax
  $(window).scroll(function() {
    var yPos = ($(window).scrollTop() / 5)
    var coords = "50%" + yPos + "px";

    $('.hero').css({backgroundPosition: coords});
  });
});