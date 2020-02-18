function make2DArray(rows, cols) {
    let arr = new Array(rows);
    for (let i=0; i<rows; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

let grid;
let cols;
let rows;

let resolution = 20;

function setup() {
    createCanvas(500, 500);
    cols = height / resolution;
    rows = width / resolution;
    grid = make2DArray(rows, cols);
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(0);
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            x = i * resolution;
            y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                rect(x,y, resolution, resolution);
            }
        }
    }
}