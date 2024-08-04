// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.

// - Write a function that places n queens on an n-n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// - Log the distinct solutions for a few test cases.
function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  const isSafe = (row, col) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const solve = (row) => {
    if (row === n) {
      const solution = board.map((row) => row.join(""));
      solutions.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = ".";
      }
    }
  };

  solve(0);
  return solutions;
}

// Test cases
const printSolutions = (solutions) => {
  for (const solution of solutions) {
    console.log("Solution:");
    for (const row of solution) {
      console.log(row);
    }
    console.log("");
  }
};

let solutions = solveNQueens(4);
printSolutions(solutions); // Output: 2 distinct solutions for 4-queens

solutions = solveNQueens(8);
printSolutions(solutions); // Output: 92 distinct solutions for 8-queens
