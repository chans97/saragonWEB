const moveToFirst = () => {
  const location1 = document.querySelector("#firstContent").offsetTop;

  window.scrollTo({ top: location1 - 130, behavior: "smooth" });
  console.log("location");
};

const moveToSecond = () => {
  const location2 = document.querySelector("#secondContent").offsetTop;

  window.scrollTo({ top: location2 - 130, behavior: "smooth" });
  console.log("location");
};
