(function(window) {
    //声明形状，注意Z和S、L和J是同形状但是相互倒置的；
    //const Shape = [IShape, OShape, TShape, LShape, JShape, SShape, ZShape];

    var initialPosition = [2, 4];

    const IShapes = [
        [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3]
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1]
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3]
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1]
        ]
    ];

    const OShapes = [
        [
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 2]
        ],
        [
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 2]
        ],
        [
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 2]
        ],
        [
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 2]
        ]
    ];

    const TShapes = [
        [
            [1, 1],
            [2, 0],
            [2, 1],
            [2, 2]
        ],
        [
            [0, 1],
            [1, 0],
            [1, 1],
            [2, 1]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 2]
        ],
        [
            [0, 1],
            [1, 1],
            [1, 2],
            [2, 1]
        ]
    ];

    const LShapes = [
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [2, 2]
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
            [1, 2]
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [2, 1]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 0]
        ]
    ];

    const JShapes = [
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [2, 2]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 2]
        ],
        [
            [0, 1],
            [0, 2],
            [1, 1],
            [2, 1]
        ],
        [
            [1, 0],
            [2, 0],
            [2, 1],
            [2, 2]
        ]
    ];

    const SShapes = [
        [
            [1, 1],
            [1, 2],
            [2, 0],
            [2, 1]
        ],
        [
            [0, 1],
            [1, 1],
            [1, 2],
            [2, 2]
        ],
        [
            [1, 1],
            [1, 2],
            [2, 0],
            [2, 1]
        ],
        [
            [0, 1],
            [1, 1],
            [1, 2],
            [2, 2]
        ],
    ];

    const ZShapes = [
        [
            [1, 0],
            [1, 1],
            [2, 1],
            [2, 2]
        ],
        [
            [0, 2],
            [1, 1],
            [1, 2],
            [2, 1]
        ],
        [
            [1, 0],
            [1, 1],
            [2, 1],
            [2, 2]
        ],
        [
            [0, 2],
            [1, 1],
            [1, 2],
            [2, 1]
        ]
    ];

    function getShape() {
        var iShapeIndex = Math.floor(Math.random() * 7);
        // var iPostureIndex = Math.floor(Math.random() * 4);
        // window.iPostureIndex = iPostureIndex;

        switch (iShapeIndex) {
            case 0:
                return IShapes;
            case 1:
                return OShapes;
            case 2:
                return TShapes;
            case 3:
                return LShapes;
            case 4:
                return JShapes;
            case 5:
                return SShapes;
            case 6:
                return ZShapes;
        }
    }

    // var shape = getShape();

    // for (let i = 0; i < 4; i++) {
    //     var CS_x = shape[i][0] + initPosition[0];
    //     var CS_y = shape[i][1] + initPosition[1];
    //     if (CS_x > 3) {
    //         refreshCells("CS_" + CS_x + "_" + CS_y, 1);
    //     }
    //     refreshCells("NS_" + shape[i][0] + "_" + shape[i][1], 1);
    // }

    // window.initPosition = initPosition;
    window.getShape = getShape;
    window.initialPosition = initialPosition;

})(window);