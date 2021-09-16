const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')

const intro_2 = document.querySelector('.intro-2')
const video_2 = intro_2.querySelector('video')


const controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//   duration: 9000,
//   triggerElement: intro,
//   triggerHook: 0
// })
// .addIndicators()
// .setPin(intro)
// .addTo(controller);

let scene = new ScrollMagic.Scene({
  duration: 5400,
  triggerElement: intro,
  triggerHook: 0
})
// .addIndicators()
.setPin(intro)
.addTo(controller);


const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
//.addIndicators()
.setTween(textAnim)
.addTo(controller);


const textAnim3 = TweenMax.fromTo(end, 100, {color: 'black'}, {color: 'blue'})
let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: section,
  triggerHook: 0.5
})
//.addIndicators()
.setTween(textAnim3)
// .setPin(section)
.addTo(controller);

const textAnim4 = TweenMax.fromTo(end, 100, {left: '0%'}, {left: '50%'})
let scene4 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: section,
  triggerHook: 0
})
//.addIndicators()
.setTween(textAnim4)
.setPin(section)
.addTo(controller);


let accelAmount = 0.3
let scrollPos = 0
let delay = 0


scene.on('update', e => {
  scrollPos = e.scrollPos / 1000
})

// setInterval(() => {
//   delay += (scrollPos - delay) * accelAmount
//   console.log('scrollPos: ', scrollPos, 'delay: ', delay)

//   video.currentTime = delay
// }, 33.3)

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount
  // console.log('scrollPos: ', scrollPos, 'delay: ', delay)

  video.currentTime = delay
  // video_2.currentTime = delay - 6
}, 50)


let scene5 = new ScrollMagic.Scene({
  duration: 6400,
  triggerElement: intro_2,
  triggerHook: 0
})
.addIndicators()
.setPin(intro_2)
.addTo(controller);


let accelAmount_2 = 0.3
let delay_2 = 0

setInterval(() => {
  delay_2 += (scrollPos - 6.2 - delay_2) * accelAmount_2
  // console.log('scrollPos: ', scrollPos, 'delay_2: ', delay_2)

  video_2.currentTime = delay_2
}, 50)