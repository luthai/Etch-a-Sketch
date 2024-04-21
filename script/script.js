"use strict";

function createGrid() {
    let grid_size = userGridChoice();
    let grid = document.querySelector(".grid");
    for (let i = 0; i < grid_size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);
        for (let j = 0; j < grid_size; j++) {
            let col = document.createElement("col");
            col.className = "col";
            row.appendChild(col);
        }
    }

    initSquares();
}

function resetGrid() {
    let grid = document.querySelector(".grid");
    grid.replaceChildren();
}

createGrid();

function initSquares() {
    const mySketch = document.querySelectorAll(".col");
    mySketch.forEach((elem) => {
        elem.style.backgroundColor = randomColor();
        elem.addEventListener("mouseenter", (e) => {
            if (!e.target.style.opacity) e.target.style.opacity = 0;
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            if (e.target.style.opacity > 1) e.target.style.opacity = 1;
        })
    })
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function userGridChoice() {
    let grid_number = 0;
    do {
        grid_number = prompt("how many number of squares per side for the grid(X * X): ");
        if (grid_number > 100) {
            alert("Error: maximum squares per side is 100, please choose again.");
        }
    } while (grid_number > 100)

    return grid_number;
}

const btnNewGrid = document.querySelector(".btnNewGrid");
btnNewGrid.addEventListener("click", (e) => {
    resetGrid();
    createGrid();
});