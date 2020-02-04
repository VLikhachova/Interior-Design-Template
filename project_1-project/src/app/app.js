import './app.scss';

import $ from 'jquery'
import 'slick-carousel/slick/slick.min.js';
window.jQuery = $;

$(document).ready(function(){
    $('.banner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    });
  });

  $(document).ready(function(){
    $('.project-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  });

  $(".icon").click(function test(event) {
    event.preventDefault();
   // $("test").addClass("open");
  });
  $(document).ready(function(){
    $(".icon").click(function(event){
      $(".test").toggleClass("open");
      $(".icon").css("float", "right");
    });
  });