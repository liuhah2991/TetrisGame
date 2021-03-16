(function($) {
    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 37) {
            //left
            move(0, -1);
            return;
        }
        if (e && e.keyCode == 39) {
            //right
            move(0, 1);
            return;
        }
        if (e && e.keyCode == 40) {
            //down
            move(1, 0);
            return;
        }
        if (e && e.keyCode == 38) {
            //change
            change();
            return;
        }
    }

    function move(x, y) {
        refreshShape(0);
        initialPosition[0] += x;
        initialPosition[1] += y;
        refreshShape(1);
    }

    function change() {
        refreshShape(0);
        oGameScense.iCurrentPosture = (oGameScense.iCurrentPosture + 1) % 4;
        refreshShape(1);
    }



})(window)