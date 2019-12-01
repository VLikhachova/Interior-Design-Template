import './app.scss';

import $ from 'jquery'

window.jQuery = $;

$(document).ready(function(){
    $('.banner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,

    });
  });

/*let message=prompt ("put your number", 1);

function showMessage () {
    if (message > 0) {
        alert(1)
    }
    else if (message < 0) {
        alert(-1)
    }
    else if (message = 0) {
        alert (0)
    }
}

showMessage();


let result = Math.min(1,5)
alert (result)


let i=prompt("number?",100)
do {
    prompt("number?", 100)
    i++
}
while (i < 100, i==null) 
    
 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130}
    let sum = salaries.John+salaries.Ann+salariesPete
    console.log (sum)



let arr = ["HTML", "JavaScript", "CSS"];

let sorted=copySorted(arr);
function copySorted(arr) {

    let newArr = arr.concat()
    return (newArr.sort())
}

alert(arr)
alert(sorted)



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];*/