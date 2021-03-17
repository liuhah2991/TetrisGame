(function($) {
    function onkeydownEvent(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 37) {
            //left
            if (moveBoundaryCheck(0, -1)) {
                move(0, -1);
            }
            return;
        }
        if (e && e.keyCode == 39) {
            //right
            if (moveBoundaryCheck(0, 1)) {
                move(0, 1);
            }
            return;
        }
        if (e && e.keyCode == 40) {
            //down
            if (moveBoundaryCheck(1, 0)) {
                move(1, 0);
            }
            return;
        }
        if (e && e.keyCode == 38) {
            //change
            if (changeBoundaryCheck()) {
                change();
            }
            return;
        }
    }

    document.onkeydown = onkeydownEvent;

    function moveBoundaryCheck(x, y) {
        nextPosition_x = initialPosition[0] + x;
        nextPosition_y = initialPosition[1] + y;
        return BoundaryCheck(oGameScense.iCurrentPosture, nextPosition_x, nextPosition_y);
    }

    function changeBoundaryCheck() {
        nextPosture = (oGameScense.iCurrentPosture + 1) % 4;
        return BoundaryCheck(nextPosture, initialPosition[0], initialPosition[1]);
    }

    function BoundaryCheck(p, x, y) {
        for (let i = 0; i < 4; i++) {
            let next_x = oGameScense.oCurrentShape[p][i][0] + x;
            if (next_x > 24) return false;
            let next_y = oGameScense.oCurrentShape[p][i][1] + y;
            if (next_y < 0 || next_y > 10) return false;
            if (next_x > 3) {
                let value = document.getElementById("CS_" + next_x + "_" + next_y).value;
                if (value == 1) return false;
            }
        }
        return true;
    }

    function move(x, y) {
        refreshShape(0);
        initialPosition[0] += x;
        initialPosition[1] += y;
        refreshShape(2);
    }

    function change() {
        refreshShape(0);
        oGameScense.iCurrentPosture = (oGameScense.iCurrentPosture + 1) % 4;
        refreshShape(2);
    }

    window.onkeydownEvent = onkeydownEvent;
})(window)