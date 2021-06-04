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
  console.log("Running...");

  var board_state = setup();

  //updateBoard(board_state);

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

function updateBoard(board_state) {
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
  updateBoard(board);

  console.log("Generating Puzzle...");

  // Easy mode = generate 50 tiles
  var tilesGenerated = [];

  for (var i = 0; i < 50; i++) {
    var selectTile = Math.floor(Math.random() * 81);

    while (tilesGenerated.includes(selectTile)) {
      var selectTile = Math.floor(Math.random() * 81);
    }

    var selectNum = Math.floor(Math.random() * 9);

    while (!selectNumIsValid(board, selectTile, selectNum)) {
      selectNum = Math.floor(Math.random() * 9);
    }

    // Insert new number into selected board tile
    board[Math.floor(selectTile / 9)][Math.floor((selectTile % 9) / 3)][(selectTile % 9) % 3] = selectNum;
  }

  updateBoard(board);
}

function selectNumIsValid(board, tile, num) {
  //console.log(tile);

  var rowNum = Math.floor(tile / 9);
  var columnNum = tile % 9;
  var sectionNum = (Math.floor(row / 3) * 3) + (Math.floor(column / 3));

  //console.log(row + ", " + column + ", " + section);

  var row = [];
  var column = [];
  var section = [];

  for (var i = 0; i < 9; i++) {
    row.push(board[rowNum][Math.floor(i/3)][i%3]);
    column.push(board[i][Math.floor(columnNum/3)][columnNum%3]);
    switch(sectionNum) {
      case 0:
        section.push(board[][][]);
        break;
      case 1:
        section.push(board[][][]);
        break;
      case 2:
        section.push(board[][][]);
        break;
      case 3:
        section.push(board[][][]);
        break;
      case 4:
        section.push(board[][][]);
        break;
      case 5:
        section.push(board[][][]);
        break;
      case 6:
        section.push(board[][][]);
        break;
      case 7:
        section.push(board[][][]);
        break;
      case 8:
        section.push(board[][][]);
        break;
    }

  }

  if (!row.includes(num) && !column.includes(num) && !section.includes(num)) {
    return true;
  }
  else {
    return false;
  }
}
