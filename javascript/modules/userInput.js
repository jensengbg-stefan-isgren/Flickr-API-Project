// Returning the inputvalue used in the search method 
export let getInputValue = () => {
  return document.querySelector(".search__input").value;
};

//The dropdown for how many images the user want, used in the search method
export let getNumberOfImages = () => {
  let select = document.getElementById("number__images");
  if (select.options[select.selectedIndex].value == 100) {
    return 100;
  } else if (select.options[select.selectedIndex].value == 150) {
    return 150;
  } else if (select.options[select.selectedIndex].value == 250) {
    return 250;
  } else {
    return 50;
  }
};