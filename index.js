  
const R = Math.floor(Math.random()*255 + 1);
console.log(typeof(R))
const B =  Math.floor(Math.random()*255 + 1);
const G =  Math.floor(Math.random()*255 + 1);


// function randomColor(r,g, b){
//     document.getElementsById("newColor").style.color = rgb(R, G, B);
// }
// const colCode = (R,B,G)

// console.log(R);
// console.log(B);
// console.log(G  );


// const colors = ['green', 'red', 'rgba(R,G,B)', '#f15025']
// const btn = document.getElementById("btn");
// const color = document.querySelector('.color');

// btn.addEventListener('click', function() {
//     const randomNumber =Math.floor(Math.random()*3 + 1);
//     document.body.style.backgroundColor = colors[randomNumber]
//     color.textContent = colors[randomNumber];
// });

const colors = [ "#fff", "blue","#f2f2f2", "#777", 'green', 'red', 'rgba(100,200,150)', '#f15025', "nagenta", "aqua","#123123"];

const btn  = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * colors.length );
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[ randomNumber];
});

