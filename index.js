
var colors = ["#80475e", "#cc5a71", "#c89b7b", "#f0f757"];

window.onload =
  window.onclick =
  window.ontouchend =
    () => {
      gsap
        .timeline({
          defaults: {
            duration: 1,
            overwrite: true,
            attr: {
              stroke: () => colors[gsap.utils.random(0, colors.length - 1, 1)],
            },
          },
        })
        .fromTo(
          "#g1 path",
          { drawSVG: () => (Math.random > 0.5 ? "100% 100%" : 0) },
          { drawSVG: "0% 100%", stagger: { amount: 5, from: "random" } },
          0
        )
        .fromTo(
          "#g2 path",
          { drawSVG: () => (Math.random > 0.5 ? "100% 100%" : 0) },
          { drawSVG: "0% 100%", stagger: { amount: 4, from: "random" } },
          "-=3"
        );
    };
