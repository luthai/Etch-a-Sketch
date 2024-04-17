"use strict";

function createGrid() {
    let container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < 16; j++) {
            let div = document.createElement("div");
            div.className = "col";
            row.appendChild(div);
        }
    }
}

createGrid();