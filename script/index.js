const testimonials = document.querySelectorAll(".testimonial");
const testimonialDotsContainer = document.querySelector(".testimonials .dots");
const sliderArrowLeft = document.querySelector(".slider-arrow-left");
const sliderArrowRight = document.querySelector(".slider-arrow-right");

//testimonials - home page

let activeTestimonial = 0;
testimonials[activeTestimonial].classList.add("active");

testimonials.forEach((testimonial, index) => {
  testimonial.style.translate = `${index * 100}%`;
});

const changeActiveTestimonial = function (num) {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.translate = `${(index - num) * 100}%`;

    if (index === num) {
      testimonial.classList.add("active");
    } else {
      testimonial.classList.remove("active");
    }
  });
};

const getActiveTestimonialNum = function () {
  let activeTestimonialNum;
  let k = 0;

  while (activeTestimonialNum === undefined && k < testimonials.length) {
    const testimonial = testimonials[k];

    if (testimonial.classList.contains("active")) {
      activeTestimonialNum = testimonial.dataset.testimonialNum;
    }

    k++;
  }

  return +activeTestimonialNum;
};

const resetInterval = function () {
  clearInterval(testimonialInterval);

  setTimeout(() => {
    testimonialInterval = setInterval(nextTestimonial, 3000);
  }, 5000);
};

const nextTestimonial = function () {
  const activeTestimonialNum = getActiveTestimonialNum();

  if (activeTestimonialNum !== testimonials.length - 1) {
    changeActiveTestimonial(activeTestimonialNum + 1);
    return;
  }

  changeActiveTestimonial(0);
};

const prevTestimonial = function () {
  const activeTestimonialNum = getActiveTestimonialNum();

  if (activeTestimonialNum !== 0) {
    changeActiveTestimonial(activeTestimonialNum - 1);
    return;
  }

  changeActiveTestimonial(testimonials.length - 1);
};

let testimonialInterval = setInterval(nextTestimonial, 3000);

sliderArrowRight.addEventListener("click", () => {
  resetInterval();
  nextTestimonial();
});

sliderArrowLeft.addEventListener("click", () => {
  resetInterval();
  prevTestimonial();
});

testimonialDotsContainer.addEventListener("click", (e) => {
  const clickedEl = e.target;

  if (clickedEl.classList.contains("dot")) {
    resetInterval();

    changeActiveTestimonial(+clickedEl.dataset.testimonialNum);
  }
});
