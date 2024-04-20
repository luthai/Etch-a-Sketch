"use strict";

function createGrid() {
    let grid = document.querySelector(".grid");
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);
        for (let j = 0; j < 16; j++) {
            let col = document.createElement("col");
            col.className = "col";
            row.appendChild(col);
        }
    }
}

createGrid();

const mySketch = document.querySelectorAll(".col");
mySketch.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => {
        console.log(e.target.style.opacity);
        if (!e.target.style.opacity) e.target.style.opacity = 0;
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2;
        if (e.target.style.opacity > 1) e.target.style.opacity = 1;
    })
})