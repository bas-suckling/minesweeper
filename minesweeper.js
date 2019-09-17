document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var grid = 6 //size of grid (6x6)
var mineChance = 0.2 //chance of square being a mine
var board = {cells : []}
var explosion = document.getElementById("explosion")


for (var makeRows = 0; makeRows < grid; makeRows++) {
  for (var makeColumns = 0; makeColumns < grid; makeColumns++) {
    var random = Math.random( );
    board.cells.push({row: makeRows, col: makeColumns, isMine: random<mineChance, hidden: true})
    }
  }

function startGame () {
  // for each object within the cells array, create a new key value pair, surroundingMines : countSurroundingMines(cell)
  for (i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
      cell.surroundingMines = countSurroundingMines(cell)
    }
//    
document.addEventListener("click", checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
// Define this function to look for a win condition:

function checkForWin () {
  var numOfCells = board.cells.length
  var clearedSquares = 0
  var markedMines = 0
  var totalMines = 0
  
  for (k=0; k < numOfCells; k++){
    var checkCell = board.cells[k]
    // first count how many mines are present
    if (checkCell.isMine == true) {
      totalMines ++
    }
    //check to see if cell is NOT mine and is visible
    if (checkCell.isMine == false && checkCell.hidden == false){
      clearedSquares++
    }
    //check to see if is mine and is marked
    if (checkCell.isMine == true && checkCell.isMarked == true){
      markedMines ++
    }
  }
  var notMines = numOfCells - totalMines

  //console log tests
  console.log("wincheck")
  console.log(clearedSquares," cleared squares out of total number of non mines",notMines)
  console.log(markedMines, "marked mines out of ",totalMines)


  if (clearedSquares == notMines || markedMines == totalMines){
    lib.displayMessage('You win!')
    var applause = document.getElementById("applause")
    var applauseFlag = true;
    if (applauseFlag == true) {
      applause.pause();
      applause.curretTime = 0;
      applause.play();
      applauseFlag = false;
    }
  }
    
}


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var mines = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (c = 0; c < surrounding.length; c++) {
    if (surrounding[c].isMine === true) {
      mines ++
  }}
return mines
}

