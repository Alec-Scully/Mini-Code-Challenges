const toph = {
  name: "Toph",
  age: 1,
  brushesToday: 0,
  image:
    "https://osbornegroupcre.com/wp-content/uploads/2016/02/missing-image-640x360.png",
  badGoat: false,
};
//  Code goes below here!

document.addEventListener('DOMContentLoaded', () => {
  renderGoat()
})

const renderGoat = () => {
  let goatName = document.querySelector('.goat-name')
      goatName.innerText = toph.name;

  let goatAge = document.querySelector('.goat-age')
      goatAge.innerText = toph.age;

  let goatBrushes = document.querySelector('.goat-brushes')
      goatBrushes.innerHTML = toph.brushesToday;

  let goatStatus = document.querySelector('.goat-status')
      goatStatus.innerText = toph.badGoat;

  let brushButton = document.querySelector('.brush-button')
      brushButton.addEventListener('click', () => brushGoat())

  let toggleGoat = document.querySelector('.goat-toggle')
      toggleGoat.addEventListener('click', () => toggleStatus())
}

const brushGoat = () => {
  let goatBrushes = document.querySelector('.goat-brushes')
      goatBrushes.innerText = parseInt(goatBrushes.innerText) + 1
}

const toggleStatus = () => {
  let goatStatus = document.querySelector('.goat-status')
      if (goatStatus.innerText == "false") {
        goatStatus.innerText = "true"
      } else {
        goatStatus.innerText = "false"
      }
}