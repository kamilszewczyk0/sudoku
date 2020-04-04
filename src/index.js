module.exports = function solveSudoku(matrix) {
  const sudokuCheckout = (matrix) => {
    let [row, column] = [...findSpot(matrix)];
    if (row == -1) return true;

    for (let number = 1; number < 10; number++) {
      if (checkPoint(matrix, row, column, number)) {
        matrix[row][column] = number
        if (sudokuCheckout(matrix)) {
          return true;
        }
        matrix[row][column] = 0;
      }
    }
    return false;
  };

  const findSpot = (matrix) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i].indexOf(0) == -1) {
          break;
        }
        if (matrix[i][j] == 0) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  };

  const spotInRow = (matrix, row, number) => {
    for (let j = 0; j < 9; j++) {
      if (matrix[row][j] == number) {
        return true;
      }
    }
    return false;
  };

  const spotInColumn = (matrix, column, number) => {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][column] == number) {
        return true;
      }
    }
    return false
  };

  const spotInBox = (matrix, row, column, number) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[i + row][j + column] == number) {
          return true;
        }
      }
    }
    return false;
  };

  const checkPoint = (matrix, row, column, number) => {
    return !spotInRow(matrix, row, number) && !spotInColumn(matrix, column, number) &&
      !spotInBox(matrix, ((row + 1) - row % 3) - 1, ((column + 1) - column % 3) - 1, number);
  };

  sudokuCheckout(matrix);

  return matrix;
}