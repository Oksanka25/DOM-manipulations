const title = document.querySelector("#rating__title");
const submitButton = document.querySelector(".rating__btn");
const submissionText = document.querySelector(".rating__submission-text");
const arrayStars = document.querySelectorAll(".rating__star-container");
const starsContainer = document.querySelector(".rating__stars-container");

function determineRatingTitle(rating) {
  switch (rating) {
    case 1:
      return "Very dissatisfied";
    case 2:
      return "Dissatisfied";
    case 3:
      return "Neutral";
    case 4:
      return "Satisfied";
    case 5:
      return "Very satisfied";
  }
}

arrayStars.forEach((element, index) => {
  element.onclick = () => {
    if (element.classList.contains("rating__star-container_active")) {
      ratingUpdate(index + 1, arrayStars.length - 1, false);
      title.innerText = determineRatingTitle(index + 1);
    } else {
      ratingUpdate(0, index, true);
      title.innerText = determineRatingTitle(index + 1);
    }
  };
});

function ratingUpdate(start, end, active) {
  for (let i = start; i <= end; i++) {
    if (active) {
      arrayStars[i].classList.add("rating__star-container_active");
      arrayStars[i].classList.remove("rating__star-container_inactive");
      arrayStars[i].firstElementChild.className = "fa-solid fa-star";
    } else {
      arrayStars[i].classList.remove("rating__star-container_active");
      arrayStars[i].classList.add("rating__star-container_inactive");
      arrayStars[i].firstElementChild.className = "fa-regular fa-star";
    }
  }
}

function checkIfRated() {
  let isRated = false;
  arrayStars.forEach((element) => {
    if (element.classList.contains("rating__star-container_active")) {
      isRated = true;
    }
  });
  return isRated;
}

submitButton.onclick = () => {
  if (checkIfRated()) {
    title.style.display = "none";
    starsContainer.style.display = "none";
    submissionText.style.display = "block";
    submitButton.style.display = "none";
  } else {
    alert("Please rate your experience");
  }
};
