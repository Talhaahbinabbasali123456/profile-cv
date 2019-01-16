function initialize() {
// window.onscroll = function () {scrollFunction()}

// function scrollFunction(){
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//     document.querySelector('.bio').style.visibility = 'hidden';
//     document.querySelector('.bio').style.top = '0';
//     document.querySelector('.check').classList.remove("fadeInLeft");
//     document.querySelector('.check').classList.remove("delay-1s");
//     document.querySelector('.check').classList.remove("zoomIn");
//     document.querySelector('.image').style.position = 'fixed';
//     document.querySelector('.image').style.top = '20px';
//     document.querySelector('.image').style.left = '20px';
//     document.querySelector('.image').style.width = '180px';
//     document.querySelector('.image').style.height = '180px';
//     document.querySelector('.hire-me').style.padding = '15px';
//     document.querySelector('.hire-me').style.left = '-50px';
//   } else {
//     document.querySelector('.bio').style.visibility = 'visible';
//     document.querySelector('.check').classList.add("faster");
//     document.querySelector('.check').classList.add("zoomIn");
//     document.querySelector('.image').style.width = '500px';
//     document.querySelector('.image').style.height = '500px';
//     document.querySelector('.image').style.position = 'relative';
//     document.querySelector('.hire-me').style.padding = '50px';
//     document.querySelector('.hire-me').style.left = '-150px';
//   }
// }
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}






  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  });



function openTap() {
  document.querySelector(".social-content-div").style.visibility = "visible";
  document.querySelector(".social-content-div").classList.add("pulse");
}
function closeTap() { 
  document.querySelector(".social-content-div").style.visibility = "hidden";
  document.querySelector(".social-content-div").classList.remove("pulse");
}