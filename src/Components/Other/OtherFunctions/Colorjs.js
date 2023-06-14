export const changeColorTimeout = (color, id) => {
  let origColor = "white";
  document.getElementById(id).style.backgroundColor = color;
  setTimeout(function () {
    document.getElementById(id).style.backgroundColor = origColor;
  }, 120);
};

export const changeBodyColorTimeout = (color) => {
  let origColor = "white";
  document.body.style.backgroundColor = color;
  setTimeout(function () {
    document.body.style.backgroundColor = origColor;
  }, 120);
};
