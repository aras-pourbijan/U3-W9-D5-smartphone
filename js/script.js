"use strict";
class costum {
}
let myList = [];
fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((json) => getList(json))
    .catch((err) => console.log(err));
function getList(dati) {
    dati.forEach((ele) => {
        console.log(ele);
        let {} = ;
    });
}
// document.addEventListener("DOMContentLoaded", () => {
//     let text = document.querySelector(".container p") as HTMLElement;
// }
