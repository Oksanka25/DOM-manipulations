const guideText = document.getElementById("guide__text");
const guideElement = document.getElementById("guide");
// BURGER MENU
const burgerElement = document.querySelector(".header__burger-container");
const dropdownElement = document.querySelector(".header__dropdown-block"); //

//Buttons
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const skipBtn = document.getElementById("skip");
const finishBtn = document.getElementById("finish");

//NOTIFICATIONS

const guidePoints = [
  {
    element: "menu",
    text: "Text Instruction 1",
    position: "right",
    function: null,
    indentationX: 20,
  },
  {
    element: "slider",
    text: "Text Instruction 2",
    position: "right",
    function: null,
    indentationX: 20,
  },
  {
    element: "form",
    text: "Text Instruction 3",
    position: "right",
    function: null,
    indentationX: 20,
  },
  {
    element: "burger",
    text: "It's a dropdown menu",
    position: "left",
    function: showDropdown,
    indentationX: -130,
  },
];
let currentGuidePoint = 0;

function updateGuide() {
  let point = guidePoints[currentGuidePoint];
  const targetElement = document.getElementById(point.element);
  guideElement.style.top = targetElement.offsetTop + 5 + "px"; //Y
  guideElement.style.left =
    targetElement.offsetLeft + point.indentationX + "px"; //X
  guideText.innerText = point.text;
  if (point.position === "left") {
    guideElement.style.transform = "translate(-100%, 0px)";
  }
  if (point.function != null) {
    point.function();
  } else {
    burgerElement.classList.remove("active");
    dropdownElement.classList.remove("active");
  }
}

function displayBtns() {
  if (currentGuidePoint === 0) {
    prevBtn.style.display = "none";
  } else if (currentGuidePoint === guidePoints.length - 1) {
    skipBtn.style.display = "none";
    nextBtn.style.display = "none";
    finishBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "inline-block";
    skipBtn.style.display = "inline-block";
    finishBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
  }
}

prevBtn.addEventListener("click", function () {
  currentGuidePoint--;
  updateGuide();
  displayBtns();
});
nextBtn.addEventListener("click", function () {
  currentGuidePoint++;
  updateGuide();
  displayBtns();
});
skipBtn.addEventListener("click", function () {
  guideElement.style.display = "none";
});

finishBtn.addEventListener("click", function () {
  guideElement.style.display = "none";
});

function showDropdown() {
  burgerElement.classList.toggle("active");
  dropdownElement.classList.toggle("active");
}

burgerElement.addEventListener("click", () => showDropdown());

window.onload = () => {
  updateGuide();
  displayBtns();
};
