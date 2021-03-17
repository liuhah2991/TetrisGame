   (function(window) {
       var $ = document;

       //填充主游戏屏幕的方格子
       var div_GP = $.getElementById('cellsPlane');
       for (let i = 4; i < 24; i++) {
           for (let j = 0; j < 11; j++) {
               div_GP.innerHTML += "<div class='cell'  id='CS_" + i + "_" + j + "'></div>";
               document.getElementById("CS_" + i + "_" + j).value = 0;
           }
       }

       //填充下一个图形屏幕的方格子
       var div_NSP = $.getElementById('nextShapePlane');
       for (let k = 0; k < 4; k++) {
           for (let z = 0; z < 4; z++) {
               div_NSP.innerHTML += "<div class='cell' id='NS_" + k + "_" + z + "'></div>";
               document.getElementById("NS_" + k + "_" + z).value = 0;
           }
       }

       function refreshCells(id, value) {
           let cells = document.getElementById(id);
           cells.value = value;
           if (value == 1 || value == 2) {
               cells.style.backgroundPosition = "27px 0px";
           } else {
               cells.style.backgroundPosition = "13px 0px";
           }
       }

       function refreshShape(value) {
           for (let i = 0; i < 4; i++) {
               let current_x = oGameScense.oCurrentShape[oGameScense.iCurrentPosture][i][0] + initialPosition[0];
               if (current_x > 3) {
                   let current_y = oGameScense.oCurrentShape[oGameScense.iCurrentPosture][i][1] + initialPosition[1];
                   refreshCells("CS_" + current_x + "_" + current_y, value);
               }
           }
       }

       function resetScreen() {
           for (let i = 4; i < 24; i++) {
               for (let j = 0; j < 11; j++) {
                   let cells = document.getElementById("CS_" + i + "_" + j);
                   cells.style.backgroundPosition = "13px 0px";
               }
           }

           for (let i = 0; i < 4; i++) {
               for (let j = 0; j < 4; j++) {
                   let cells = document.getElementById("NS_" + i + "_" + j);
                   cells.style.backgroundPosition = "13px 0px";

               }
           }
       }

       window.refreshCells = refreshCells;
       window.refreshShape = refreshShape;
       window.resetScreen = resetScreen;
   })(window)