let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')

let counter = 0;

for(let i = 0; i < point.length; i++) {
  point[i].addEventListener('click',() => {
    for(let j = 0; j < imageSlider.length; j++) {
      point[j].classList.remove('activeImage')
      imageSlider[j].classList.remove('activeImage')
    }
    counter = i;
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage')
  })
}

leftBtn.addEventListener('click',() => {
  for(let j = 0; j < imageSlider.length; j++) {
    point[j].classList.remove('activeImage')
    imageSlider[j].classList.remove('activeImage')
  }
  counter--
  if (counter < 0) {
    counter = imageSlider.length - 1
  }
  imageSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
})

rightBtn.addEventListener('click',() => {
  for(let j = 0; j < imageSlider.length; j++) {
    point[j].classList.remove('activeImage')
    imageSlider[j].classList.remove('activeImage')
  }
  counter++
  if (counter >= imageSlider.length) {
    counter = 0
  }
  imageSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
})

function slowSlider () {
  for(let j = 0; j < imageSlider.length; j++) {
    point[j].classList.remove('activeImage')
    imageSlider[j].classList.remove('activeImage')
  }
  counter++
  if (counter >= imageSlider.length) {
    counter = 0
  }
  imageSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
}

let second = 1000*3
let timer = setInterval(() => slowSlider(), second)

let container = document.getElementById('container')
container.addEventListener('mouseover',() => {
  clearInterval(timer)
})
container.addEventListener('mouseleave',() => {
  timer = setInterval(() => slowSlider(), second)
}) 

let imageText = document.querySelectorAll('.imageText');

for(let i = 0; i < imageText.length; i++) {
  imageText[i].textContent = imageSlider[i].getAttribute('data-text');
}


















