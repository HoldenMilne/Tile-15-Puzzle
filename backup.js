    alert(randomNum());
    
    //Constructor for a tile
    function Tile(tileNumber, position, theTile, noTile){
        this.value = tileNumber;
        this.pos = position; 
        this.htmlTile = theTile;
        this.emptyTile = noTile;
    }
    
    //2D array representing the 4x4 playing board positions. 16 = empty square
    var solvedBoard = [ [1,  2,  3,  4],  
                        [5,  6,  7,  8], 
                        [9, 10, 11, 12], 
                        [13,14, 15, 16]];
    
    var board1 = [  [5, 10,  4,  8],  
                    [9,  6,  3,  1], 
                    [2,  7, 13,  12],           
                    [15, 14, 11, 16]];

    var board2 = [  [13, 14, 2,  12],  
                    [3,  1,  7,  10], 
                    [11, 9,  6,   4], 
                    [15, 8,  5,  16]];

    var board3 = [  [8,   4, 1,  6],  
                    [15, 13, 14, 12], 
                    [11,  9, 3,  5], 
                    [10,  2, 7, 16]];

    var board4 = [  [5,   8,  2,  13],  
                    [14,  6,  4,  15], 
                    [9,  12,  3, 11], 
                    [10,  7,  1, 16]];

    var board5 = [  [11, 2,  8,  7],  
                    [3,  9,  5,  1], 
                    [13, 12, 6,  4], 
                    [14, 10, 15, 16]];
    
    var board = document.getElementById("board");

    theBoard = generateBoard();
    
    var htmlTile1 = document.getElementsByTagName("DIV")[1];
        if(theBoard == "board1"){
            htmlTile1.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
            var tile1 = new Tile(board1[0][0], 1, htmlTile1, false);
        }
        else if(theBoard == "board2"){
            htmlTile1.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
            var tile1 = new Tile(board2[0][0], 1, htmlTile1, false);
        }
        else if(theBoard == "board3"){
            htmlTile1.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
            var tile1 = new Tile(board3[0][0], 1, htmlTile1, false);
        }

    var htmlTile2 = document.getElementsByTagName("DIV")[2];
        if(theBoard == "board1"){
            htmlTile2.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
            var tile2 = new Tile(board1[0][0], 1, htmlTile2, false);
        }
        else if(theBoard == "board2"){
            htmlTile2.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
            var tile2 = new Tile(board2[0][0], 1, htmlTile2, false);
        }
        else if(theBoard == "board3")
            htmlTile2.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
    
    var htmlTile3 = document.getElementsByTagName("DIV")[3];
        if(theBoard == "board1")
            htmlTile3.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile3.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile3.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
  
    var htmlTile4 = document.getElementsByTagName("DIV")[4];
        if(theBoard == "board1")
            htmlTile4.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile4.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile4.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
       
    var htmlTile5 = document.getElementsByTagName("DIV")[5];
        if(theBoard == "board1")
            htmlTile5.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile5.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile5.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
       
    var htmlTile6 = document.getElementsByTagName("DIV")[6];
        if(theBoard == "board1")
            htmlTile6.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile6.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile6.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile7 = document.getElementsByTagName("DIV")[7];
        if(generateBoard() == "board1")
            htmlTile7.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(generateBoard() == "board2")
            htmlTile7.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(generateBoard() == "board3")
            htmlTile7.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
        
    var htmlTile8 = document.getElementsByTagName("DIV")[8];
        if(theBoard == "board1")
            htmlTile8.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile8.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile8.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile9 = document.getElementsByTagName("DIV")[9];
        if(theBoard == "board1")
            htmlTile9.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile9.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile9.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile10 = document.getElementsByTagName("DIV")[10]; 
        if(theBoard == "board1")
            htmlTile10.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile10.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile10.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile11 = document.getElementsByTagName("DIV")[11];
        if(theBoard == "board1")
            htmlTile11.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile11.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile11.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile12 = document.getElementsByTagName("DIV")[12];
        if(theBoard == "board1")
            htmlTile12.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile12.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile12.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile13 = document.getElementsByTagName("DIV")[13];
        if(theBoard == "board1")
            htmlTile13.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile13.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile13.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile14 = document.getElementsByTagName("DIV")[14]; 
        if(theBoard == "board1")
            htmlTile14.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile14.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile14.childNodes[0].appendChild(document.createTextNode(board3[0][0]));

    var htmlTile15 = document.getElementsByTagName("DIV")[15];  
        if(theBoard == "board1")
            htmlTile15.childNodes[0].appendChild(document.createTextNode(board1[0][0]));
        else if(theBoard == "board2")
            htmlTile15.childNodes[0].appendChild(document.createTextNode(board2[0][0]));
        else if(theBoard == "board3")
            htmlTile15.childNodes[0].appendChild(document.createTextNode(board3[0][0]));
    
    var tile1 = new Tile(board2[0][0], 1, htmlTile1, false);
    var tile2 = new Tile(board2[0][1], 2, htmlTile2, false);
    var tile3 = new Tile(board2[0][2], 3, htmlTile3, false);
    var tile4 = new Tile(board2[0][3], 4,  htmlTile4, false);
    var tile5 = new Tile(board2[1][0], 5, htmlTile5, false);
    var tile6 = new Tile(board2[1][1], 6, htmlTile6, false);
    var tile7 = new Tile(board2[1][2], 7, htmlTile7, false);
    var tile8 = new Tile(board2[1][3], 8, htmlTile8, false);
    var tile9 = new Tile(board2[2][0], 9, htmlTile9, false);
    var tile10 = new Tile(board2[2][1], 10, htmlTile10, false);
    var tile11 = new Tile(board2[2][2], 11, htmlTile11, false);
    var tile12 = new Tile(board2[2][3], 12, htmlTile12, false);
    var tile13 = new Tile(board2[3][0], 13, htmlTile13, false);
    var tile14 = new Tile(board2[3][1], 14, htmlTile14, false);
    var tile15 = new Tile(board2[3][2], 15, htmlTile15, false);
    
    var puzzle15 = [    [tile1, tile2, tile3, tile4], 
                        [tile5, tile6, tile7, tile8], 
                        [tile9, tile10, tile11, tile12], 
                        [tile13, tile14, tile15] ];
    var boolBoard = [   [true,  true,  true,  true],  
                        [true, true,   true, true], 
                        [true,  true,  true,  true], 
                        [true,  true,  true,  false]]; 
    var temp;
    //moving tile15
    $(puzzle15[3][2].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[3][2].pos, boolBoard, "right") == "right"){
            $(puzzle15[3][2].htmlTile).animate({left: "+=59px"}); 
            puzzle15[3][2].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[3][2].pos, boolBoard, "left") == "left"){
            $(puzzle15[3][2].htmlTile).animate({left: "-=59px"});
            puzzle15[3][2].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[3][2].pos, boolBoard, "down") == "down"){
            $(puzzle15[3][2].htmlTile).animate({bottom: "-=59px"});
            puzzle15[3][2].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[3][2].pos, boolBoard, "up") == "up"){
            $(puzzle15[3][2].htmlTile).animate({bottom: "+=59px"});
            puzzle15[3][2].pos -= 4;
        }
    });
    $(puzzle15[3][1].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[3][1].pos, boolBoard, "right") == "right"){
            $(puzzle15[3][1].htmlTile).animate({left: "+=59px"}); 
            puzzle15[3][1].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[3][1].pos, boolBoard, "left") == "left"){
            $(puzzle15[3][1].htmlTile).animate({left: "-=59px"});
            puzzle15[3][1].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[3][1].pos, boolBoard, "down") == "down"){
            $(puzzle15[3][1].htmlTile).animate({bottom: "-=59px"});
            puzzle15[3][1].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[3][1].pos, boolBoard, "up") == "up"){
            $(puzzle15[3][1].htmlTile).animate({bottom: "+=59px"});
            puzzle15[3][1].pos -= 4;
        }
    });
    $(puzzle15[3][0].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[3][0].pos, boolBoard, "right") == "right"){
            $(puzzle15[3][0].htmlTile).animate({left: "+=59px"}); 
            puzzle15[3][0].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[3][0].pos, boolBoard, "left") == "left"){
            $(puzzle15[3][0].htmlTile).animate({left: "-=59px"});
            puzzle15[3][0].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[3][0].pos, boolBoard, "down") == "down"){
            $(puzzle15[3][0].htmlTile).animate({bottom: "-=59px"});
            puzzle15[3][0].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[3][0].pos, boolBoard, "up") == "up"){
            $(puzzle15[3][0].htmlTile).animate({bottom: "+=59px"});
            puzzle15[3][0].pos -= 4;
        }
    });
    $(puzzle15[2][3].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[2][3].pos, boolBoard, "right") == "right"){
            $(puzzle15[2][3].htmlTile).animate({left: "+=59px"}); 
            puzzle15[2][3].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[2][3].pos, boolBoard, "left") == "left"){
            $(puzzle15[2][3].htmlTile).animate({left: "-=59px"});
            puzzle15[2][3].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[2][3].pos, boolBoard, "down") == "down"){
            $(puzzle15[2][3].htmlTile).animate({bottom: "-=59px"});
            puzzle15[2][3].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[2][3].pos, boolBoard, "up") == "up"){
            $(puzzle15[2][3].htmlTile).animate({bottom: "+=59px"});
            puzzle15[2][3].pos -= 4;
        }
    });
    $(puzzle15[2][2].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[2][2].pos, boolBoard, "right") == "right"){
            $(puzzle15[2][2].htmlTile).animate({left: "+=59px"}); 
            puzzle15[2][2].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[2][2].pos, boolBoard, "left") == "left"){
            $(puzzle15[2][2].htmlTile).animate({left: "-=59px"});
            puzzle15[2][2].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[2][2].pos, boolBoard, "down") == "down"){
            $(puzzle15[2][2].htmlTile).animate({bottom: "-=59px"});
            puzzle15[2][2].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[2][2].pos, boolBoard, "up") == "up"){
            $(puzzle15[2][2].htmlTile).animate({bottom: "+=59px"});
            puzzle15[2][2].pos -= 4;
        }
    });
    $(puzzle15[2][1].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[2][1].pos, boolBoard, "right") == "right"){
            $(puzzle15[2][1].htmlTile).animate({left: "+=59px"}); 
            puzzle15[2][1].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[2][1].pos, boolBoard, "left") == "left"){
            $(puzzle15[2][1].htmlTile).animate({left: "-=59px"});
            puzzle15[2][1].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[2][1].pos, boolBoard, "down") == "down"){
            $(puzzle15[2][1].htmlTile).animate({bottom: "-=59px"});
            puzzle15[2][1].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[2][1].pos, boolBoard, "up") == "up"){
            $(puzzle15[2][1].htmlTile).animate({bottom: "+=59px"});
            puzzle15[2][1].pos -= 4;
        }
    });
    $(puzzle15[2][0].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[2][0].pos, boolBoard, "right") == "right"){
            $(puzzle15[2][0].htmlTile).animate({left: "+=59px"}); 
            puzzle15[2][0].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[2][0].pos, boolBoard, "left") == "left"){
            $(puzzle15[2][0].htmlTile).animate({left: "-=59px"});
            puzzle15[2][0].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[2][0].pos, boolBoard, "down") == "down"){
            $(puzzle15[2][0].htmlTile).animate({bottom: "-=59px"});
            puzzle15[2][0].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[2][0].pos, boolBoard, "up") == "up"){
            $(puzzle15[2][0].htmlTile).animate({bottom: "+=59px"});
            puzzle15[2][0].pos -= 4;
        }
    });
    $(puzzle15[1][3].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[1][3].pos, boolBoard, "right") == "right"){
            $(puzzle15[1][3].htmlTile).animate({left: "+=59px"}); 
            puzzle15[1][3].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[1][3].pos, boolBoard, "left") == "left"){
            $(puzzle15[1][3].htmlTile).animate({left: "-=59px"});
            puzzle15[1][3].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[1][3].pos, boolBoard, "down") == "down"){
            $(puzzle15[1][3].htmlTile).animate({bottom: "-=59px"});
            puzzle15[1][3].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[1][3].pos, boolBoard, "up") == "up"){
            $(puzzle15[1][3].htmlTile).animate({bottom: "+=59px"});
            puzzle15[1][3].pos -= 4;
        }
    });
    $(puzzle15[1][2].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[1][2].pos, boolBoard, "right") == "right"){
            $(puzzle15[1][2].htmlTile).animate({left: "+=59px"}); 
            puzzle15[1][2].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[1][2].pos, boolBoard, "left") == "left"){
            $(puzzle15[1][2].htmlTile).animate({left: "-=59px"});
            puzzle15[1][2].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[1][2].pos, boolBoard, "down") == "down"){
            $(puzzle15[1][2].htmlTile).animate({bottom: "-=59px"});
            puzzle15[1][2].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[1][2].pos, boolBoard, "up") == "up"){
            $(puzzle15[1][2].htmlTile).animate({bottom: "+=59px"});
            puzzle15[1][2].pos -= 4;
        }
    });
    $(puzzle15[1][1].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[1][1].pos, boolBoard, "right") == "right"){
            $(puzzle15[1][1].htmlTile).animate({left: "+=59px"}); 
            puzzle15[1][1].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[1][1].pos, boolBoard, "left") == "left"){
            $(puzzle15[1][1].htmlTile).animate({left: "-=59px"});
            puzzle15[1][1].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[1][1].pos, boolBoard, "down") == "down"){
            $(puzzle15[1][1].htmlTile).animate({bottom: "-=59px"});
            puzzle15[1][1].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[1][1].pos, boolBoard, "up") == "up"){
            $(puzzle15[1][1].htmlTile).animate({bottom: "+=59px"});
            puzzle15[1][1].pos -= 4;
        }
    });
    $(puzzle15[1][0].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[1][0].pos, boolBoard, "right") == "right"){
            $(puzzle15[1][0].htmlTile).animate({left: "+=59px"}); 
            puzzle15[1][0].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[1][0].pos, boolBoard, "left") == "left"){
            $(puzzle15[1][0].htmlTile).animate({left: "-=59px"});
            puzzle15[1][0].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[1][0].pos, boolBoard, "down") == "down"){
            $(puzzle15[1][0].htmlTile).animate({bottom: "-=59px"});
            puzzle15[1][0].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[1][0].pos, boolBoard, "up") == "up"){
            $(puzzle15[1][0].htmlTile).animate({bottom: "+=59px"});
            puzzle15[1][0].pos -= 4;
        }
    });
    $(puzzle15[0][3].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[0][3].pos, boolBoard, "right") == "right"){
            $(puzzle15[0][3].htmlTile).animate({left: "+=59px"}); 
            puzzle15[0][3].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[0][3].pos, boolBoard, "left") == "left"){
            $(puzzle15[0][3].htmlTile).animate({left: "-=59px"});
            puzzle15[0][3].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[0][3].pos, boolBoard, "down") == "down"){
            $(puzzle15[0][3].htmlTile).animate({bottom: "-=59px"});
            puzzle15[0][3].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[0][3].pos, boolBoard, "up") == "up"){
            $(puzzle15[0][3].htmlTile).animate({bottom: "+=59px"});
            puzzle15[0][3].pos -= 4;
        }
    });
    $(puzzle15[0][2].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[0][2].pos, boolBoard, "right") == "right"){
            $(puzzle15[0][2].htmlTile).animate({left: "+=59px"}); 
            puzzle15[0][2].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[0][2].pos, boolBoard, "left") == "left"){
            $(puzzle15[0][2].htmlTile).animate({left: "-=59px"});
            puzzle15[0][2].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[0][2].pos, boolBoard, "down") == "down"){
            $(puzzle15[0][2].htmlTile).animate({bottom: "-=59px"});
            puzzle15[0][2].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[0][2].pos, boolBoard, "up") == "up"){
            $(puzzle15[0][2].htmlTile).animate({bottom: "+=59px"});
            puzzle15[0][2].pos -= 4;
        }
    });
    $(puzzle15[0][1].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[0][1].pos, boolBoard, "right") == "right"){
            $(puzzle15[0][1].htmlTile).animate({left: "+=59px"}); 
            puzzle15[0][1].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[0][1].pos, boolBoard, "left") == "left"){
            $(puzzle15[0][1].htmlTile).animate({left: "-=59px"});
            puzzle15[0][1].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[0][1].pos, boolBoard, "down") == "down"){
            $(puzzle15[0][1].htmlTile).animate({bottom: "-=59px"});
            puzzle15[0][1].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[0][1].pos, boolBoard, "up") == "up"){
            $(puzzle15[0][1].htmlTile).animate({bottom: "+=59px"});
            puzzle15[0][1].pos -= 4;
        }
    });
    $(puzzle15[0][0].htmlTile).click(function(){
        //move right
        if(checkIfEmpty(puzzle15[0][0].pos, boolBoard, "right") == "right"){
            $(puzzle15[0][0].htmlTile).animate({left: "+=59px"}); 
            puzzle15[0][0].pos += 1;
        }
        else if(checkIfEmpty(puzzle15[0][0].pos, boolBoard, "left") == "left"){
            $(puzzle15[0][0].htmlTile).animate({left: "-=59px"});
            puzzle15[0][0].pos -= 1;
        }
        else if(checkIfEmpty(puzzle15[0][0].pos, boolBoard, "down") == "down"){
            $(puzzle15[0][0].htmlTile).animate({bottom: "-=59px"});
            puzzle15[0][0].pos += 4;
        }
        else if(checkIfEmpty(puzzle15[0][0].pos, boolBoard, "up") == "up"){
            $(puzzle15[0][0].htmlTile).animate({bottom: "+=59px"});
            puzzle15[0][0].pos -= 4;
        }
    });

function checkIfEmpty(n, boolBoard, dir){
    //false == empty tile
   if(n == 16){//[3][3]     
       if((boolBoard[3][2] == false) && (dir == "left")){
           boolBoard[3][2] = true;
           boolBoard[3][3] = false;
           return "left";
       }
       else if((boolBoard[2][3] == false) && (dir == "up")){
           boolBoard[2][3] = true;
           boolBoard[3][3] = false;
           return "up"; 
       }
   }
    if(n == 15){//[3][2]
        if((boolBoard[3][3] == false) && (dir == "right")){
            boolBoard[3][3] = true;
            boolBoard[3][2] = false;
            return "right";
        }
        else if((boolBoard[3][1] == false) && (dir == "left")){
            boolBoard[3][1] = true;
            boolBoard[3][2] = false;
            return "left";
        }
        else if((boolBoard[2][2] == false) && (dir == "up")){
            boolBoard[2][2] = true;
            boolBoard[3][2] = false;
            return "up";
        }
    }
    if(n == 14){//[3][1]
        if((boolBoard[3][0] == false) && (dir == "left")){
            boolBoard[3][0] = true;
            boolBoard[3][1] = false;
            return "left";
        }
        else if((boolBoard[3][2] == false) && (dir == "right")){
            boolBoard[3][2] = true;
            boolBoard[3][1] = false;
            return "right";
        }
        else if((boolBoard[2][1] == false) && (dir == "up")){
            boolBoard[2][1] = true;
            boolBoard[3][1] = false;
            return "up";
        }
    }
    if(n == 13){//[3][0]
        if((boolBoard[3][1] == false) && (dir == "right")){
            boolBoard[3][1] = true;
            boolBoard[3][0] = false;
            return "right";
        }
        else if((boolBoard[2][0] == false) && (dir == "up")){
            boolBoard[2][0] = true;
            boolBoard[3][0] = false;
            return "up";
        }
    }
    if(n == 12){//[2][3]
        if((boolBoard[2][2] == false) && (dir == "left")){
            boolBoard[2][2] = true;
            boolBoard[2][3] = false;
            return "left";
        }
        else if((boolBoard[3][3] == false) && (dir == "down")){
            boolBoard[3][3] = true;
            boolBoard[2][3] = false;
            return "down";
        }
        else if((boolBoard[1][3] == false) && (dir == "up")){
            boolBoard[1][3] = true;
            boolBoard[2][3] = false;
            return "up";
        }
    }
    if(n == 11){//[2][2]
        if((boolBoard[2][1] == false) && (dir == "left")){
            boolBoard[2][1] = true;
            boolBoard[2][2] = false;
            return "left";
        }
        else if((boolBoard[2][3] == false) && (dir == "right")){
            boolBoard[2][3] = true;
            boolBoard[2][2] = false;
            return "right";
        }
        else if((boolBoard[1][2] == false) && (dir == "up")){
            boolBoard[1][2] = true;
            boolBoard[2][2] = false;
            return "up";
        }
        else if((boolBoard[3][2] == false) && (dir == "down")){
            boolBoard[3][2] = true;
            boolBoard[2][2] = false;
            return "down";
        }
    }
    if(n == 10){//[2][1]
        if((boolBoard[2][0] == false) && (dir == "left")){
            boolBoard[2][0] = true;
            boolBoard[2][1] = false;
            return "left";
        }
        else if((boolBoard[2][2] == false) && (dir == "right")){
            boolBoard[2][2] = true;
            boolBoard[2][1] = false;
            return "right";
        }
        else if((boolBoard[1][1] == false) && (dir == "up")){
            boolBoard[1][1] = true;
            boolBoard[2][1] = false;
            return "up";
        }
        else if((boolBoard[3][1] == false) && (dir == "down")){
            boolBoard[3][1] = true;
            boolBoard[2][1] = false;
            return "down";
        }
    }
    if(n == 9){//[2][0]
        if((boolBoard[2][1] == false) && (dir == "right")){
            boolBoard[2][1] = true;
            boolBoard[2][0] = false;
            return "right";
        }
        else if((boolBoard[3][0] == false) && (dir == "down")){
            boolBoard[3][0] = true;
            boolBoard[2][0] = false;
            return "down";
        }
        else if((boolBoard[1][0] == false) && (dir == "up")){
            boolBoard[1][0] = true;
            boolBoard[2][0] = false;
            return "up";
        }
    }
    if(n == 8){//[1][3]
        if((boolBoard[1][2] == false) && (dir == "left")){
            boolBoard[1][2] = true;
            boolBoard[1][3] = false;
            return "left";
        }
        else if((boolBoard[2][3] == false) && (dir == "down")){
            boolBoard[2][3] = true;
            boolBoard[1][3] = false;
            return "down";
        }
        else if((boolBoard[0][3] == false) && (dir == "up")){
            boolBoard[0][3] = true;
            boolBoard[1][3] = false;
            return "up";
        }
    }
    if(n == 7){//[1][2]
        if((boolBoard[1][1] == false) && (dir == "left")){
            boolBoard[1][1] = true;
            boolBoard[1][2] = false;
            return "left";
        }
        else if((boolBoard[1][3] == false) && (dir == "right")){
            boolBoard[1][3] = true;
            boolBoard[1][2] = false;
            return "right";
        }
        else if((boolBoard[0][2] == false) && (dir == "up")){
            boolBoard[0][2] = true;
            boolBoard[1][2] = false;
            return "up";
        }
        else if((boolBoard[2][2] == false) && (dir == "down")){
            boolBoard[2][2] = true;
            boolBoard[1][2] = false;
            return "down";
        }
    }
    if(n == 6){//[1][1]
        if((boolBoard[1][0] == false) && (dir == "left")){
            boolBoard[1][0] = true;
            boolBoard[1][1] = false;
            return "left";
        }
        else if((boolBoard[1][2] == false) && (dir == "right")){
            boolBoard[1][2] = true;
            boolBoard[1][1] = false;
            return "right";
        }
        else if((boolBoard[0][1] == false) && (dir == "up")){
            boolBoard[0][1] = true;
            boolBoard[1][1] = false;
            return "up";
        }
        else if((boolBoard[2][1] == false) && (dir == "down")){
            boolBoard[2][1] = true;
            boolBoard[1][1] = false;
            return "down";
        }
    }
    if(n == 5){//[1][0]
        if((boolBoard[1][1] == false) && (dir == "right")){
            boolBoard[1][1] = true;
            boolBoard[1][0] = false;
            return "right";
        }
        else if((boolBoard[2][0] == false) && (dir == "down")){
            boolBoard[2][0] = true;
            boolBoard[1][0] = false;
            return "down";
        }
        else if((boolBoard[0][0] == false) && (dir == "up")){
            boolBoard[0][0] = true;
            boolBoard[1][0] = false;
            return "up";
        }
    }
    if(n == 4){//[0][3]     
       if((boolBoard[0][2] == false) && (dir == "left")){
           boolBoard[0][2] = true;
           boolBoard[0][3] = false;
           return "left";
       }
       else if((boolBoard[1][3] == false) && (dir == "down")){
           boolBoard[1][3] = true;
           boolBoard[0][3] = false;
           return "down"; 
       }
   }
    if(n == 3){//[0][2]
        if((boolBoard[0][3] == false) && (dir == "right")){
            boolBoard[0][3] = true;
            boolBoard[0][2] = false;
            return "right";
        }
        else if((boolBoard[0][1] == false) && (dir == "left")){
            boolBoard[0][1] = true;
            boolBoard[0][2] = false;
            return "left";
        }
        else if((boolBoard[1][2] == false) && (dir == "down")){
            boolBoard[1][2] = true;
            boolBoard[0][2] = false;
            return "down";
        }
    }
    if(n == 2){//[0][1]
        if((boolBoard[0][0] == false) && (dir == "left")){
            boolBoard[0][0] = true;
            boolBoard[0][1] = false;
            return "left";
        }
        else if((boolBoard[0][2] == false) && (dir == "right")){
            boolBoard[0][2] = true;
            boolBoard[0][1] = false;
            return "right";
        }
        else if((boolBoard[1][1] == false) && (dir == "down")){
            boolBoard[1][1] = true;
            boolBoard[0][1] = false;
            return "down";
        }
    }
    if(n == 1){//[0][0]     
       if((boolBoard[0][1] == false) && (dir == "right")){
           boolBoard[0][1] = true;
           boolBoard[0][0] = false;
           return "right";
       }
       else if((boolBoard[1][0] == false) && (dir == "down")){
           boolBoard[1][0] = true;
           boolBoard[0][0] = false;
           return "down"; 
       }
   }
}

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    
    if(isSolved() == true)     
        alert("You solved the puzzle!");
    else
        alert("You haven't solved the puzzle.")

})

function isSolved(){
    
    var solved = 0;
    var row = 0;
    for(var numberOfRows = 0; numberOfRows < 4; numberOfRows++){
        for(var col = 0; col < 4; col++){    
            if((row == 3) && (col == 2)){
                if(puzzle15[row][col].value == puzzle15[row][col].pos){
                    solved++; break;
                }
                else 
                    break;
            }
            if(puzzle15[row][col].value == puzzle15[row][col].pos){
                solved++;
            }
        }
        row++;
    }
    
    if(solved == 15)
        return true;
    
}

function randomNum(){
    var max = 3;
    var min = 0;
    var num = 0;
    
    //Random number between 0 and 5
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    num = Math.random() * (max - min) + min;
    
    return num;
}

function generateBoard(){
    if((randomNum() > 0) && (randomNum() <= 1))
        return "board1";
    if((randomNum() > 1) && (randomNum() <= 2))
        return "board2";
    if((randomNum() > 2) && (randomNum() <= 3))
        return "board3";
    /*if((randomNum() > 3) && (randomNum() <= 4))
        return "board4";
    if((randomNum() > 4) && (randomNum() <= 5))
        return "board5";*/
}