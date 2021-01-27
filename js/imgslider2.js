(function () {
  const slideList2 = document.querySelector(".slide_list2"); // Slide parent dom
  const slideContents2 = document.querySelectorAll(".slide_content2"); // each slide dom
  const slideBtnNext2 = document.querySelector(".slide_btn_next2"); // next button
  const slideBtnPrev2 = document.querySelector(".slide_btn_prev2"); // prev button
  const pagination2 = document.querySelector(".slide_pagination2");
  const slideLen2 = slideContents2.length; // slide length
  const slideWidth = 600; // slide width
  const slideSpeed = 300; // slide speed
  const startNum = 0; // initial slide index (0 ~ 4)

  slideList2.style.width = slideWidth * (slideLen2 + 2) + "px";

  // Copy first and last slide
  let firstChild = slideList2.firstElementChild;
  let lastChild = slideList2.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);

  // Add copied Slides
  slideList2.appendChild(clonedFirst);
  slideList2.insertBefore(clonedLast, slideList2.firstElementChild);

  // Add pagination dynamically
  let pageChild = "";
  for (var i = 0; i < slideLen2; i++) {
    pageChild += '<li class="dot2';
    pageChild += i === startNum ? " dot2_active2" : "";
    pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
  }
  pagination2.innerHTML = pageChild;
  const pageDot2s = document.querySelectorAll(".dot2"); // each dot2 from pagination

  slideList2.style.transform =
    "translate3d(-" + slideWidth * (startNum + 1) + "px, 0px, 0px)";

  let curIndex = startNum; // current slide index (except copied slide)
  let curSlide = slideContents2[curIndex]; // current slide dom
  curSlide.classList.add("slide_active2");

  /** Next Button Event */
  slideBtnNext2.addEventListener("click", function () {
    if (curIndex <= slideLen2 - 1) {
      slideList2.style.transition = slideSpeed + "ms";
      slideList2.style.transform =
        "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
    }
    if (curIndex === slideLen2 - 1) {
      setTimeout(function () {
        slideList2.style.transition = "0ms";
        slideList2.style.transform =
          "translate3d(-" + slideWidth + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = -1;
    }
    curSlide.classList.remove("slide_active2");
    pageDot2s[curIndex === -1 ? slideLen2 - 1 : curIndex].classList.remove(
      "dot2_active2"
    );
    curSlide = slideContents2[++curIndex];
    curSlide.classList.add("slide_active2");
    pageDot2s[curIndex].classList.add("dot2_active2");
  });

  /** Prev Button Event */
  slideBtnPrev2.addEventListener("click", function () {
    if (curIndex >= 0) {
      slideList2.style.transition = slideSpeed + "ms";
      slideList2.style.transform =
        "translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
    }
    if (curIndex === 0) {
      setTimeout(function () {
        slideList2.style.transition = "0ms";
        slideList2.style.transform =
          "translate3d(-" + slideWidth * slideLen2 + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = slideLen2;
    }
    curSlide.classList.remove("slide_active2");
    pageDot2s[curIndex === slideLen2 ? 0 : curIndex].classList.remove(
      "dot2_active2"
    );
    curSlide = slideContents2[--curIndex];
    curSlide.classList.add("slide_active2");
    pageDot2s[curIndex].classList.add("dot2_active2");
  });

  /** Pagination Button Event */
  let curDot2;
  Array.prototype.forEach.call(pageDot2s, function (dot2, i) {
    dot2.addEventListener("click", function (e) {
      e.preventDefault();
      curDot2 = document.querySelector(".dot2_active2");
      curDot2.classList.remove("dot2_active2");

      curDot2 = this;
      this.classList.add("dot2_active2");

      curSlide.classList.remove("slide_active2");
      curIndex = Number(this.getAttribute("data-index"));
      curSlide = slideContents2[curIndex];
      curSlide.classList.add("slide_active2");
      slideList2.style.transition = slideSpeed + "ms";
      slideList2.style.transform =
        "translate3d(-" + slideWidth * (curIndex + 1) + "px, 0px, 0px)";
    });
  });
})();
