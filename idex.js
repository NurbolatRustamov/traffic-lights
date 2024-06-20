const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const backImg = document.getElementById('back-img')
const yellowImg = document.getElementById('back-img-two')
const greenImg = document.getElementById('back-img-three')
const trafficJam = document.getElementById('traffic-jam')
const box = document.getElementById('box')

red.addEventListener('click', () => {
    setTimeout(() => {
        red.style.background = red
        red.style.opacity = 1
        backImg.innerHTML = `
        <div class="back-img" id="back-img">
        <h1>To'htash Kerak</h1>
      </div>
        `
        setTimeout(() => {
            red.style.background = red
            red.style.opacity = 0.5
            backImg.innerHTML = `''`
        }, 3000);
    }, 1);

})
yellow.addEventListener('click', () => {
    setTimeout(() => {

        yellow.style.opacity = 1
        yellowImg.innerHTML = `
        <div class="back-img-two" id="back-img-two">
        <h1>Sabir qilish kerak</h1>
      </div>
        `
        setTimeout(() => {

            yellow.style.opacity = 0.5
            yellowImg.innerHTML = `''`
        }, 3000);
    }, 1);
})
green.addEventListener('click', () => {
    setTimeout(() => {

        green.style.opacity = 1
        greenImg.innerHTML = `
        <div class="back-img-three" id="back-img-three">
        <h1>Yurish kerak</h1>
      </div>
        `
        setTimeout(() => {

            green.style.opacity = 0.5
            greenImg.innerHTML = `''`
        }, 3000);
    }, 1);
})

// box.addEventListener('click', () => {
//     setTimeout(() => {
//         trafficJam.innerHTML = `
//      <div class="traffic-jam" id="traffic-jam">
//           <h1>Propka</h1>
//         </div>
//         `

//         setTimeout(() => {
//             trafficJam.innerHTML = `''`
//         }, 3000);
//     }, 1);
// })



