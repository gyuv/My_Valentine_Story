useEffect(() => {
  gsap.to(".chapter", {
    scale: 1.2,
    scrollTrigger: {
      trigger: ".chapter",
      scrub: true,
    },
  });
}, []);
