(function($) {
    //声明形状，注意Z和S、L和J是同形状但是相互倒置的；
    //const Shape = [IShape, OShape, TShape, LShape, JShape, SShape, ZShape];

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

    const IInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
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

    const OInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
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

    const TInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
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

    const LInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
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

    const JInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
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

    const SInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
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

    const ZInitialPosition = [
        [2, 4],
        [2, 4],
        [2, 4],
        [2, 4]
    ];

    function getShape() {
        var iShapeIndex = Math.floor(Math.random() * 7);
        var iPostureIndex = Math.floor(Math.random() * 4);

        switch (iShapeIndex) {
            case 0:
                return IShapes[iPostureIndex];
            case 1:
                return OShapes[iPostureIndex];
            case 2:
                return TShapes[iPostureIndex];
            case 3:
                return LShapes[iPostureIndex];
            case 4:
                return JShapes[iPostureIndex];
            case 5:
                return SShapes[iPostureIndex];
            case 6:
                return ZShapes[iPostureIndex];
        }
    }

    var shape = getShape();

    for (let i = 0; i < 4; i++) {
        var CS_x = shape[i][0] + 2;
        var CS_y = shape[i][1] + 4;
        if (CS_x > 3) {
            document.getElementById("CS_" + CS_x + "_" + CS_y).style.backgroundPosition = "27px 0px";
        }
        document.getElementById("NS_" + shape[i][0] + "_" + shape[i][1]).style.backgroundPosition = "27px 0px";
    }



})(window);