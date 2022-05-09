const toggleNav = () => {
  const navList = document.querySelector(".nav-list");
  const menuBtn = document.querySelector(".menu-btn");
  const closeNavBtn = document.querySelector(".close-nav-btn");

  menuBtn.addEventListener("click", () => {
    navList.classList.add("nav-active");

    if (navList.classList.contains("nav-active")) {
      closeNavBtn.addEventListener("click", () => {
        navList.classList.remove("nav-active");
      });
    }
  });
};
toggleNav();

const scrolledNav = () => {
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".logo");
  const header = document.querySelector("header");

  const navObserverOptions = {
    rootMargin: "-400px 0px 0px 0px",
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
        logo.classList.add("logo-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
        logo.classList.remove("logo-scrolled");
      }
    });
  }, navObserverOptions);

  navObserver.observe(header);
};

scrolledNav();

const serviciiSlider = () => {
  const serviciiTrack = document.querySelector(".servicii-slide-track");
  const slides = document.querySelectorAll(".servicii-slide");
  const cards = document.querySelectorAll(".servicii-slide-card");
  const nextButton = document.querySelector(".servicii-next-button");
  const prevButton = document.querySelector(".servicii-prev-button");
  const serviciiPages = document.querySelectorAll(".servicii-page");

  const cardMargin = 40;
  let counter = 0;

  slideWidth = slides[0].getBoundingClientRect().width;
  //cardWidth = cards[0].getBoundingClientRect().width + cardMargin;

  // const setCardPosition = (card, index) => {
  //   card.style.transform = "translate(" + cardWidth * index + "px" + ")";
  // };

  const setSlidePosition = (slide, index) => {
    slide.style.transform = "translateX(" + slideWidth * index + "px" + ")";
  };

  //slides.forEach(setSlidePosition);
  //cards.forEach(setCardPosition);

  if (counter == 0) {
    prevButton.classList.add("hide-button");
  }

  const removePageSelection = () => {
    serviciiPages.forEach((page) => {
      page.classList.remove("selected-servicii-page");
    });
  };

  const nextSlider = () => {
    counter++;
    serviciiTrack.style.transition = "transform 400ms ease";
    serviciiTrack.style.transform =
      "translateX(" + -slideWidth * counter + "px)";

    if (counter >= slides.length - 1) {
      nextButton.classList.add("hide-button");
    }
    if (prevButton.classList.contains("hide-button")) {
      prevButton.classList.remove("hide-button");
    }

    removePageSelection();

    if (counter >= slides.length) {
      return;
    } else {
      serviciiPages[counter].classList.add("selected-servicii-page");
    }
  };

  const prevSlider = () => {
    counter--;
    serviciiTrack.style.transition = "transform 400ms ease";
    serviciiTrack.style.transform =
      "translateX(" + slideWidth * counter + "px)";

    if (counter == 0) {
      prevButton.classList.add("hide-button");
    }
    if (nextButton.classList.contains("hide-button")) {
      nextButton.classList.remove("hide-button");
    }

    removePageSelection();

    if (counter < 0) {
      return;
    } else {
      serviciiPages[counter].classList.add("selected-servicii-page");
    }
  };

  nextButton.addEventListener("click", nextSlider);
  prevButton.addEventListener("click", prevSlider);
};

serviciiSlider();

const mediciSlider = () => {
  const mediciTrack = document.querySelector(".medicii-slide-track");
  const mediciCards = document.querySelectorAll(".medic-card");
  const nextButton = document.querySelector(".medicii-next-button");
  const prevButton = document.querySelector(".medicii-prev-button");
  const cardMargin = 50;
  let counter = 0;

  const cardWidth = mediciCards[0].getBoundingClientRect().width + cardMargin;

  const setCardPosition = (card, index) => {
    card.style.transform = "translateX(" + cardWidth * index + "px" + ")";
  };

  mediciCards.forEach(setCardPosition);

  if (counter <= 0) {
    prevButton.classList.add("hide-button");
  }

  const moveTrackRight = () => {
    counter++;
    mediciTrack.style.transition = "all 400ms ease";
    mediciTrack.style.transform =
      "translateX(-" + cardWidth * counter + "px" + ")";

    if (counter == mediciCards.length - 1) {
      nextButton.classList.add("hide-button");
    }
    if (prevButton.classList.contains("hide-button")) {
      prevButton.classList.remove("hide-button");
    }
  };
  const moveTrackLeft = () => {
    counter--;
    mediciTrack.style.transition = "all 400ms ease";
    mediciTrack.style.transform =
      "translateX(-" + cardWidth * counter + "px" + ")";

    if (counter <= 0) {
      prevButton.classList.add("hide-button");
    }
    if (nextButton.classList.contains("hide-button")) {
      nextButton.classList.remove("hide-button");
    }
  };

  nextButton.addEventListener("click", moveTrackRight);
  prevButton.addEventListener("click", moveTrackLeft);
};

mediciSlider();
