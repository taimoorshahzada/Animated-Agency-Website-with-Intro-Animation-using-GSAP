/** @format */
let tl = gsap.timeline();
tl.from(".loader-logo div", {
  delay: 1,
  y: "100%",
})
  .to(".loader-image", {
    scale: 1,
    opacity: 1,
    stagger: {
      amount: 1.5,
    },
  })
  .from(
    ".loading-bar",
    {
      width: 0,
    },
    "-=50%"
  )
  .to(".loader-image", {
    delay: 0.5,
    y: "100vh",
    rotate: "30deg",
    stagger: {
      amount: 0.4,
    },
  })
  .to(
    ".loading-bar",
    {
      width: 0,
    },
    "-=80%"
  )
  .to(".loader", {
    opacity: 0,
  })
  .from(".logo, .menu-item, .info, .text-p", {
    delay: 0.5,
    y: "100%",
    stagger: {
      amount: 0.5,
    },
  })
  .from(
    ".main-text-heading",
    {
      y: "120%",
      duration: 1,
      skewY: 10,
    },
    "<"
  )
  .from(".scroll-down-bar", {
    delay: 1,
    height: 0,
  });
