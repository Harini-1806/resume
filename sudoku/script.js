const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const board = document.getElementById("sudoku-board");

for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {

        const cell = document.createElement("input");

        // Text input removes increase/decrease arrows
        cell.type = "text";
        cell.maxLength = 1;
        cell.id = `${row}-${col}`;

        // Allow only numbers 1-9
        cell.addEventListener("input", () => {
            cell.value = cell.value.replace(/[^1-9]/g, "");
        });

        if (puzzle[row][col] !== 0) {
            cell.value = puzzle[row][col];
            cell.disabled = true;
        }

        board.appendChild(cell);
    }
}

function checkSolution() {
    let correct = true;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {

            const cell = document.getElementById(`${row}-${col}`);

            if (Number(cell.value) !== solution[row][col]) {
                correct = false;
            }
        }
    }

    const result = document.getElementById("result");

    if (correct) {
        result.textContent = " Correct Solution!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Try Again!";
        result.style.color = "red";
    }
}