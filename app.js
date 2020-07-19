const tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
tl.add("cartMove");
tl.fromTo(
  "#cart",
  2,
  {
    x: -110,
    ease: Power1.easeOut,
  },
  {
    x: 20,
    ease: Bounce.easeOut,
  },
  "cartMove"
);
tl.from(
  "#RightWheelCross,#LeftWheelCross",
  2,
  {
    transformOrigin: "center",
    rotation: -1500,
  },
  "cartMove"
);
tl.add("textMove");
tl.to("#RightWheelCross,#LeftWheelCross", 0.2, {
  rotation: -100,
  transformOrigin: "center",
});
tl.to(
  "#wholeWord",
  1.5,
  {
    x: 20,
    ease: Bounce.easeOut,
  },
  "textMove-=1.5"
);
