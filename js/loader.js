var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementsByClassName("bar_menu").style.display = "block";
  document.getElementsByClassName("section1").style.display = "block";
  document.getElementsByClassName("section2").style.display = "block";
  document.getElementsByClassName("section3").style.display = "block";
  document.getElementsByClassName("section4").style.display = "block";
}