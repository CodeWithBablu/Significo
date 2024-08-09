import { gsap, Power1, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from 'locomotive-scroll';


gsap.registerPlugin(ScrollTrigger);

const screen = {
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
}

const sectionColorChangeAnimation = () => {
  document.querySelectorAll(".section")
    .forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        onEnter: function () {
          document.body.setAttribute("theme", section.dataset.color);
        },
        onEnterBack: function () {
          document.body.setAttribute("theme", section.dataset.color);
        }
      })
    });
}

const homePageAnimation = () => {
  gsap.set(".hero_rows-parent", { scale: 5 });

  var clutter = "";
  document.querySelector(".hero_subtitle").textContent.trim()
    .split(" ")
    .forEach((char) => {
      clutter += `<span>${char}&nbsp;</span>`;
    });

  document.querySelector('.hero_subtitle').innerHTML = clutter;
  gsap.set(".hero_subtitle span", { opacity: 0 });


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    }
  });

  tl.to('.vdiv', {
    '--clip': "0%",
    ease: Power1,
  }, 0)
    .to('.hero_rows-parent', {
      scale: 1,
      ease: Power1,
    }, 0)
    .to('.rgt', {
      xPercent: 20,
      stagger: 0.05,
      ease: Power4,
    }, 'b')
    .to('.lft', {
      xPercent: -20,
      stagger: 0.05,
      ease: Power4,
    }, 'b')
    .to(".hero_subtitle span", {
      opacity: 1,
      stagger: 0.03,
      ease: Power4,
    }, 'b');


  if (window.innerWidth > screen.lg) {
    ['.card1', '.card2', '.card3', '.card4'].forEach(selector => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: selector,
          start: "top +=650",
          end: "bottom +=850",
          scrub: 0.3,
        },
        backgroundColor: "#09090b",
        color: "#a5f3fc",
        width: "+=50",
        ease: Power1.easeInOut
      });
    });
  }

}

const slidePageAnimation = () => {
  gsap.to('.slide', {
    scrollTrigger: {
      trigger: ".horizontal_stats",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4
  });
}

const teamAnimation = () => {
  document.querySelectorAll('.team_item')
    .forEach((el) => {

      el.addEventListener("mousemove", function (dets) {
        const x = gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX);
        gsap.to(this.querySelector('.picture'), {
          opacity: 1,
          scale: 1,
          x: x,
          ease: Power4,
          duration: 0.5,
        })
      });

      el.addEventListener("mouseenter", function (dets) {
        gsap.to(this.querySelector('.hover-layer'), {
          height: "100%",
          ease: Power4,
          duration: 0.5,
        })
      });

      el.addEventListener("mouseleave", function (dets) {
        gsap.to(this.querySelector('.picture'), {
          opacity: 0,
          scale: 0,
          ease: Power4,
          duration: 0.5,
        });

        gsap.to(this.querySelector('.hover-layer'), {
          height: "0%",
          ease: Power4,
          duration: 0.5,
        });

      });

    });
}

const capsuleAnimation = () => {
  gsap.to(".capsule_item:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
    y: 0,
    ease: Power4
  })
}

const vw = (coef) => window.innerHeight - (window.innerWidth * (coef / 100));
const footerAnimation = () => {
  gsap.to('.footer-logo-char', {
    scrollTrigger: {
      trigger: ".logo-chars",
      start: "top " + vw(14),
      end: "bottom 95%",
      // markers: true,
      scrub: 2,
    },
    y: 0,
    stagger: 0.6,
    ease: Power4
  })
}



const loco = () => {
  const locomotiveScroll = new LocomotiveScroll();
};

loco();
homePageAnimation();
slidePageAnimation();
teamAnimation();
footerAnimation();
capsuleAnimation();
sectionColorChangeAnimation();
