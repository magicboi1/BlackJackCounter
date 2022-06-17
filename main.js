let add = document.getElementById("right");
let remove = document.getElementById("left");
let reset = document.getElementById("reset");
let int = document.getElementById("number");
let integer = 0;
let img = document.getElementById("showImage");

window.addEventListener("keydown", function (e) {
  if (e.key === "d") {
    integer += 1;
    int.innerHTML = integer;
  }

  if (e.key === "a") {
    integer -= 1;
    int.innerHTML = integer;
  }

  if (e.key === "r") {
    integer = 0;
    int.innerHTML = integer;
  }
});

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;
});

remove.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;
});

reset.addEventListener("click", function () {
  integer = 0;
  int.innerHTML = integer;
});

document.getElementById("showImage").onclick = function () {
  if (document.getElementById("theImage").style.visibility == "hidden") {
    document.getElementById("theImage").style.visibility = "visible";
  } else {
    document.getElementById("theImage").style.visibility = "hidden";
  }
};
