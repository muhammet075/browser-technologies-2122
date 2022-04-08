var shirtContainer1 = document.querySelector(".shirtContainer1");

shirtContainer1.addEventListener("click", toonGroter1);

function toonGroter1() {
  shirtContainer1.classList.toggle("toonGroter1");
}

var shirtContainer2 = document.querySelector(".shirtContainer2");

shirtContainer2.addEventListener("click", toonGroter2);

function toonGroter2() {
  shirtContainer2.classList.toggle("toonGroter2");
}
