(function(window) {
    const eGameState = {
        INIT: 0,
        RUN: 1,
        PAUSE: 2,
        OVER: 3
    }

    var oGameScense = new Object();

    oGameScense.InitGame = function() {
        //游戏初始化：1. oGameScense 赋予新值  2. 界面刷新
        oGameScense.oCurrentShape = getShape();
        oGameScense.iCurrentPosture = Math.floor(Math.random() * 4);
        oGameScense.oNextShape = getShape();
        oGameScense.iNextPosture = Math.floor(Math.random() * 4);
        oGameScense.eGameState = eGameState.INIT;
        oGameScense.iScore = 0;
        oGameScense.iLines = 0;
        oGameScense.iLevel = 1;
        oGameScense.iTime = "00:00";

        resetScreen();
    }

    oGameScense.RunGame = function() {
        if (oGameScense.eGameState == eGameState.INIT) {
            oGameScense.eGameState = eGameState.RUN;
            refreshShape(2);

            for (let i = 0; i < 4; i++) {
                refreshNextShape(1);
            }
            var time = 1100 - 100 * oGameScense.iLevel;

            var downTimeout = window.setInterval(function() {
                if (oGameScense.eGameState == eGameState.RUN) {
                    var e = window.KeyboardEvent;
                    e.keyCode = 40;
                    onkeydownEvent(e);
                }
            }, time);
        }
    }

    oGameScense.PauseGame = function() {
        if (oGameScense.eGameState == eGameState.RUN) {
            oGameScense.eGameState = eGameState.PAUSE;
        } else {
            oGameScense.eGameState = eGameState.RUN;
        }

    }

    oGameScense.OverGame = function() {
        oGameScense.eGameState = eGameState.OVER;

    }

    window.oGameScense = oGameScense;
})(window)