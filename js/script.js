$(document).ready(function(){

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

if ($(window).width() <= 500) {
  $("#mainImage").attr("src", "images/fitness_3_silueta_xs.jpg");
}


var imageCounter = 0;

window.setInterval(function(){
    changeImage();
}, 3000);

function changeImage(){
  imageCounter++;

  if(imageCounter === 5){
    imageCounter = 1;
  }

  if(imageCounter === 1){
    $("#mainImage").attr("src", "images/fitness_6_silueta.jpg");
    if ($(window).width() <= 500) {
      $("#mainImage").attr("src", "images/fitness_6_silueta_xs.jpg");
    }
  }

  if(imageCounter === 2){
    $("#mainImage").attr("src", "images/fitness_7_silueta.jpg");
    if ($(window).width() <= 500) {
      $("#mainImage").attr("src", "images/fitness_7_silueta_xs.jpg");
    }
  }

  if(imageCounter === 3){
    $("#mainImage").attr("src", "images/fitness_3_silueta.jpg");
    if ($(window).width() <= 500) {
      $("#mainImage").attr("src", "images/fitness_3_silueta_xs.jpg");
    }
  }

  if(imageCounter === 4){
    $("#mainImage").attr("src", "images/fitness_4_silueta.jpg");
    if ($(window).width() <= 500) {
      $("#mainImage").attr("src", "images/fitness_4_silueta_xs.jpg");
    }
  }

}
});
