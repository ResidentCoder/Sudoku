// Javascript version of sudoku
// 9 x 9 grid made up of 9 3 x 3 grids
// Rules:
//   1) Each 3x3 grid must contain one of each number 1-9
//   2) Each row and each column must also contain one of each number 1-9
//   3) Each of the two diagonals must contain one of each number 1-9

// Empty board state
// . . . | . . . | . . . (cells 0 - 8) Section 0
// . . . | . . . | . . . (cells 9 - 17) Section 1
// . . . | . . . | . . . (cells 18 - 26) Section 2
// ---------------------
// . . . | . . . | . . . (cells 27 - 35) Section 3
// . . . | . . . | . . . (cells 36 - 44) Section 4
// . . . | . . . | . . . (cells 45 - 53) Section 5
// ---------------------
// . . . | . . . | . . . (cells 54 - 62) Section 6
// . . . | . . . | . . . (cells 63 - 71) Section 7
// . . . | . . . | . . . (cells 72 - 80) Section 8


main();

function main() {

  var board_state = setup();

  //printBoard(board_state);

  board_state = generatePuzzle(board_state);

}

function setup() {
  var board =
    [
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
    ];

    return board;
}

function printBoard(board_state) {
  var printStr = "";

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        printStr += board_state[i][j][k] + ".";
      }
      if (j < 2)
        printStr += "|";
    }
    console.log(printStr);
    printStr = "";
    if (i == 2 || i == 5)
      console.log("--------------------");
  }
}

function generatePuzzle(board) {
  printBoard(board);

  console.log("Generating Puzzle...");

  // Easy mode = generate 50 tiles
  var numTilesGen = 0;
  var tilesGenerated = [];

  while(numTilesGen != 50) {
    var randTile = Math.floor(Math.random() * 81);
    // Starts tile generation loop again
    if (tilesGenerated.includes(randTile)) {
      continue;
    }

    var randNum = Math.floor(Math.random() * 9) + 1;

    if (selectNumIsValid(board, randTile, randNum)) {
      // Insert new number into selected board tile
      board[Math.floor(randTile / 9)][Math.floor((randTile % 9) / 3)][(randTile % 9) % 3] = randNum;
      numTilesGen++;
    }
  }

  printBoard(board);
}

function selectNumIsValid(board, tile, num) {

  var rowNum = Math.floor(tile / 9);
  var columnNum = tile % 9;
  var sectionNum = (Math.floor(rowNum / 3) * 3) + (Math.floor(columnNum / 3));

  console.log("Num: " + num);
  console.log(rowNum + ", " + columnNum + ", " + sectionNum);

  var row = [];
  var column = [];
  var section = [];

  for (var i = 0; i < 9; i++) {
    row.push(board[rowNum][Math.floor(i/3)][i%3]);
    column.push(board[i][Math.floor(columnNum/3)][columnNum%3]);
    // TODO: Fix, giving duplicated numbers in sections
    switch(sectionNum) {
      case 0:
        section.push(board[Math.floor(i/3)][sectionNum % 3][i%3]);
        break;
      case 1:
        section.push(board[Math.floor(i/3)][sectionNum % 3][i%3]);
        break;
      case 2:
        section.push(board[Math.floor(i/3)][sectionNum % 3][i%3]);
        break;
      case 3:
        section.push(board[Math.floor(i/3) + 3][(sectionNum % 3)][i%3]);
        break;
      case 4:
        section.push(board[Math.floor(i/3) + 3][(sectionNum % 3)][i%3]);
        break;
      case 5:
        section.push(board[Math.floor(i/3) + 3][(sectionNum % 3)][i%3]);
        break;
      case 6:
        section.push(board[Math.floor(i/3) + 6][(sectionNum % 3)][i%3]);
        break;
      case 7:
        section.push(board[Math.floor(i/3) + 6][(sectionNum % 3)][i%3]);
        break;
      case 8:
        section.push(board[Math.floor(i/3) + 6][(sectionNum % 3)][i%3]);
        break;
    }

  }

  if (row.includes(num) || column.includes(num) || section.includes(num)) {
    console.log(row.includes(num) + ", " + column.includes(num) + ", " + section.includes(num));

    console.log("row:");
    row.forEach(num => console.log(num));
    console.log("column:");
    column.forEach(num => console.log(num));
    console.log("section:");
    section.forEach(num => console.log(num));
    return false;
  }
  else {
    return true;
  }
}

function trclick() {
  console.log("Clicked");
}
