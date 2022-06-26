
const btn = document.getElementById("btn");
const color = document.querySelector(".color");




// console.log(red, green, blue);


btn.addEventListener("click", function() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
   
        let rgbColor = `rgb(${r}, ${g}, ${b})`;
    
        document.body.style.backgroundColor =  rgbColor ;
        color.textContent = rgbColor;
    
    
});





// function redColor() {
//     return Math.floor(Math.random() * 255);
// }
// const r = blueColor();
// console.log(r);

// function greenColor() {
//     return Math.floor(Math.random() * 255);
// }
// const g = blueColor();
// console.log(g);

// function blueColor() {
//     return Math.floor(Math.random() * 255);
// }
// const b = blueColor();
// console.log(b);