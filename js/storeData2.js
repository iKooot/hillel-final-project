//here I just create Object for Data Base. Then convert it to JSON and copy/past it to "db.json" file
const data = {
    iPhone: {
        'iPhone 12': {
            'iPhone 12 Pro Max': [
                {
                    id: '1',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 128,
                    color: 'Pacific blue',
                    quantity: 3,
                    price: 32000,
                    img: ["apple_iphone_12_pro_max_pacific_blue.jpg",
                        "12_pro_max_siniy_2_is.jpg",
                        "12_pro_max_siniy_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '2',
                    name: 'Apple iPhone 12 Pro',
                    memory: 128,
                    color: 'Gold',
                    quantity: 1,
                    price: 32000,
                    img: ["apple_iphone_12_pro_max_gold.jpg",
                        "12_pro_max_zoloto_2_is.jpg",
                        "12_pro_max_zoloto_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '3',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 128,
                    color: 'Graphite',
                    quantity: 5,
                    price: 32000,
                    img: ["apple_iphone_12_pro_max_graphite.jpg",
                        "12_pro_max_grafit_2_is.jpg",
                        "12_pro_max_grafit_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '4',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 128,
                    color: 'Silver',
                    quantity: 2,
                    price: 32000,
                    img: ["apple_iphone_12_pro_max_silver.jpg",
                        "12_pro_max_serebro_2_is.jpg",
                        "12_pro_max_serebro_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '5',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 256,
                    color: 'Pacific blue',
                    quantity: 3,
                    price: 35000,
                    img: ["apple_iphone_12_pro_max_pacific_blue.jpg",
                        "12_pro_max_siniy_2_is.jpg",
                        "12_pro_max_siniy_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '6',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 256,
                    color: 'Gold',
                    quantity: 1,
                    price: 35000,
                    img: ["apple_iphone_12_pro_max_gold.jpg",
                        "12_pro_max_zoloto_2_is.jpg",
                        "12_pro_max_zoloto_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '7',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 256, color: 'Graphite',
                    quantity: 1,
                    price: 35000,
                    img: ["apple_iphone_12_pro_max_graphite.jpg",
                        "12_pro_max_grafit_2_is.jpg",
                        "12_pro_max_grafit_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },

                {
                    id: '8',
                    name: 'Apple iPhone 12 Pro Max',
                    memory: 256,
                    color: 'Silver',
                    quantity: 4,
                    price: 35000,
                    img: ["apple_iphone_12_pro_max_silver.jpg",
                        "12_pro_max_serebro_2_is.jpg",
                        "12_pro_max_serebro_3_is.jpg",
                        "12_pro_max_is.jpg"
                    ]
                },
            ],

            'iPhone 12 Pro': [
                {
                    id: '1',
                    name: 'Apple iPhone 12 Pro ',
                    memory: 64,
                    color: 'Purple',
                    quantity: 4,
                    price: 22699,
                    img: ["apple_iphone_12_purpl_3_is.jpg",
                        "apple_iphone_12_purpl_1_is.jpg",
                        "apple_iphone_12_purpl_3_is.jpg",
                        "apple_iphone_12_purpl_4_is.jpg"
                    ]
                },
                {
                    id: '2',
                    name: 'Apple iPhone 12 Pro',
                    memory: 64,
                    color: 'Blue',
                    quantity: 7,
                    price: 22699,
                    img: ["iphone_12_blue.jpg",
                        "apple_iphone_12_blu_2_is.jpg",
                        "apple_iphone_12_blu_5_is.jpg",
                        "apple_iphone_12_blu_4_is.jpg"
                    ]
                },
                {
                    id: '3',
                    name: 'Apple iPhone 12 Pro',
                    memory: 64,
                    color: 'Red',
                    quantity: 2,
                    price: 22699,
                    img: ["iphone_12_red.jpg",
                        "apple_iphone_12_red_2_is.jpg",
                        "apple_iphone_12_red_5_is.jpg",
                        "apple_iphone_12_red_6_is.jpg"
                    ]
                },
                {
                    id: '4',
                    name: 'Apple iPhone 12 Pro',
                    memory: 128,
                    color: 'Purple',
                    quantity: 3,
                    price: 24699,
                    img: ["apple_iphone_12_purpl_3_is.jpg",
                        "apple_iphone_12_purpl_1_is.jpg",
                        "apple_iphone_12_purpl_3_is.jpg",
                        "apple_iphone_12_purpl_4_is.jpg"
                    ]
                },
                {
                    id: '5',
                    name: 'Apple iPhone 12 Pro',
                    memory: 128,
                    color: 'Blue',
                    quantity: 5,
                    price: 24699,
                    img: ["iphone_12_blue.jpg",
                        "apple_iphone_12_blu_2_is.jpg",
                        "apple_iphone_12_blu_5_is.jpg",
                        "apple_iphone_12_blu_4_is.jpg"
                    ]
                },
                {
                    id: '6',
                    name: 'Apple iPhone 12 Pro',
                    memory: 128,
                    color: 'Red',
                    quantity: 8,
                    price: 24699,
                    img: ["iphone_12_red.jpg",
                        "apple_iphone_12_red_2_is.jpg",
                        "apple_iphone_12_red_5_is.jpg",
                        "apple_iphone_12_red_6_is.jpg"
                    ]
                },

            ],
        },
        'iPhone 11': {
            'iPhone 11 Pro Max': [
                {
                    id: '1',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 64,
                    color: 'Dark green',
                    quantity: 3,
                    price: 27399,
                    img: ["apple_iphone_11_pro_max_midnight_green.jpg",
                        "iphone_11_pro_max_midnight_green_2_is.jpg",
                        "iphone_11_pro_max_midnight_green_3_is.jpg",
                        "iphone_11_pro_max_midnight_green_4_is.jpg",
                    ]
                },
                {
                    id: '2',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 64,
                    color: 'Gold',
                    quantity: 3,
                    price: 27399,
                    img: ["apple_iphone_11_pro_max_gold.jpg",
                        "iphone_11_pro_max_gold_2_is.jpg",
                        "iphone_11_pro_max_gold_3_is.jpg",
                        "iphone_11_pro_max_gold_4_is.jpg",
                    ]
                },
                {
                    id: '3',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 64,
                    color: 'Gray Space',
                    quantity: 3,
                    price: 27399,
                    img: ["apple_iphone_11_pro_max_space_gray.jpg",
                        "iphone_11_pro_max_space_gray_2_is.jpg",
                        "iphone_11_pro_max_space_gray_3_is.jpg",
                        "iphone_11_pro_max_space_gray_4_is.jpg",
                    ]
                },
                {
                    id: '4',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 64, color: 'Silver',
                    quantity: 8,
                    price: 27399,
                    img: ["apple_iphone_11_pro_max_silver.jpg",
                        "iphone_11_pro_max_silver_2_is.jpg",
                        "iphone_11_pro_max_silver_3_is.jpg",
                        "iphone_11_pro_max_silver_4_is.jpg",
                    ]
                },
                {
                    id: '5',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 256, color: 'Dark green',
                    quantity: 3,
                    price: 34499,
                    img: ["apple_iphone_11_pro_max_midnight_green.jpg",
                        "iphone_11_pro_max_midnight_green_2_is.jpg",
                        "iphone_11_pro_max_midnight_green_3_is.jpg",
                        "iphone_11_pro_max_midnight_green_4_is.jpg",
                    ]
                },
                {
                    id: '6',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 256,
                    color: 'Gold',
                    quantity: 8,
                    price: 34499,
                    img: ["apple_iphone_11_pro_max_gold.jpg",
                        "iphone_11_pro_max_gold_2_is.jpg",
                        "iphone_11_pro_max_gold_3_is.jpg",
                        "iphone_11_pro_max_gold_4_is.jpg",
                    ]
                },
                {
                    id: '7',
                    name: 'Apple iPhone 11 Pro Max',
                    memory: 256,
                    color: 'Gray Space',
                    quantity: 1,
                    price: 34499,
                    img: ["apple_iphone_11_pro_max_space_gray.jpg",
                        "iphone_11_pro_max_space_gray_2_is.jpg",
                        "iphone_11_pro_max_space_gray_3_is.jpg",
                        "iphone_11_pro_max_space_gray_4_is.jpg",
                    ]
                },
                {
                    id: '8',
                    name: 'apple_iphone_11_pro_max_silver.jpg',
                    memory: 256,
                    color: 'Silver',
                    quantity: 4,
                    price: 34499,
                    img: ["apple_iphone_11_pro_max_silver.jpg",
                        "iphone_11_pro_max_silver_2_is.jpg",
                        "iphone_11_pro_max_silver_3_is.jpg",
                        "iphone_11_pro_max_silver_4_is.jpg",
                    ]
                },
            ],

            'iPhone 11 Pro': [
                {
                    id: '1',
                    name: 'Apple iPhone 11 Pro',
                    memory: 128,
                    color: 'Black',
                    quantity: 3,
                    price: 19499,
                    img: ["apple_iphone_11_black.jpg",
                        "iphone_11_black_2_is.jpg",
                        "iphone_11_black_3_is.jpg",
                        "iphone_11_black_4_is.jpg",
                    ]
                },
                {
                    id: '2',
                    name: 'Apple iPhone 11 Pro',
                    memory: 128,
                    color: 'White',
                    quantity: 5,
                    price: 19499,
                    img: ["apple_iphone_11_white.jpg",
                        "iphone_11_white_2_is.jpg",
                        "iphone_11_white_3_is.jpg",
                        "iphone_11_white_4_is.jpg",
                    ]
                },
                {
                    id: '3',
                    name: 'Apple iPhone 11 Pro',
                    memory: 128,
                    color: 'Red',
                    quantity: 2,
                    price: 19499,
                    img: ["apple_iphone_11_red.jpg",
                        "iphone_11_red_2_is.jpg",
                        "iphone_11_red_3_is.jpg",
                        "iphone_11_red_4_is.jpg",
                    ]
                },
                {
                    id: '4',
                    name: 'Apple iPhone 11 Pro',
                    memory: 256,
                    color: 'Black',
                    quantity: 4,
                    price: 25499,
                    img: ["apple_iphone_11_black.jpg",
                        "iphone_11_black_2_is.jpg",
                        "iphone_11_black_3_is.jpg",
                        "iphone_11_black_4_is.jpg",
                    ]
                },
                {
                    id: '5',
                    name: 'Apple iPhone 11 Pro',
                    memory: 256,
                    color: 'White',
                    quantity: 7,
                    price: 25499,
                    img: ["apple_iphone_11_white.jpg",
                        "iphone_11_white_2_is.jpg",
                        "iphone_11_white_3_is.jpg",
                        "iphone_11_white_4_is.jpg",
                    ]
                },
                {
                    id: '6',
                    name: 'Apple iPhone 11 Pro',
                    memory: 256,
                    color: 'Red',
                    quantity: 9,
                    price: 25499,
                    img: ["apple_iphone_11_red.jpg",
                        "iphone_11_red_2_is.jpg",
                        "iphone_11_red_3_is.jpg",
                        "iphone_11_red_4_is.jpg",
                    ]
                },
            ],
        },
        'iPhone X': {
            'iPhone Xr': [
                {
                    id: '1',
                    name: 'Apple iPhone Xr',
                    memory: 64,
                    color: 'White',
                    quantity: 9,
                    price: 15999,
                    img: ["iphone_xr_white_1_is.jpg",
                        "iphone_xr_white_2_is.jpg",
                    ]
                },
                {
                    id: '2',
                    name: 'Apple iPhone Xr',
                    memory: 64,
                    color: 'Black',
                    quantity: 8,
                    price: 15999,
                    img: ["iphone_xr_black_1_is.jpg",
                        "iphone_xr_black_2_is.jpg",
                    ]
                },
                {
                    id: '3',
                    name: 'Apple iPhone Xr',
                    memory: 128,
                    color: 'White',
                    quantity: 9,
                    price: 17999,
                    img: ["iphone_xr_white_1_is.jpg",
                        "iphone_xr_white_2_is.jpg",
                    ]
                },
                {
                    id: '4',
                    name: 'Apple iPhone Xr',
                    memory: 128,
                    color: 'Black',
                    quantity: 8,
                    price: 17999,
                    img: ["iphone_xr_black_1_is.jpg",
                        "iphone_xr_black_2_is.jpg",
                    ]
                },

            ],
            'iPhone Xs': [
                {
                    id: '1',
                    name: 'Apple iPhone Xs',
                    memory: 256,
                    color: 'Silver',
                    quantity: 2,
                    price: 20399,
                    img: ["iphone_xs_silver_1_is.jpg",
                        "iphone_xs_silver_2_is.jpg",
                    ]
                },
                {
                    id: '2',
                    name: 'Apple iPhone Xs',
                    memory: 256,
                    color: 'Gold',
                    quantity: 5,
                    price: 20399,
                    img: ["iphone_xs_gold_1_is.jpg",
                        "iphone_xs_gold_2_is.jpg",
                    ]
                },
                {
                    id: '13',
                    name: 'Apple iPhone Xs',
                    memory: 128,
                    color: 'Silver',
                    quantity: 2,
                    price: 19399,
                    img: ["iphone_xs_silver_1_is.jpg",
                        "iphone_xs_silver_2_is.jpg",
                    ]
                },
                {
                    id: '4',
                    name: 'Apple iPhone Xs',
                    memory: 128,
                    color: 'Gold',
                    quantity: 5,
                    price: 19399,
                    img: ["iphone_xs_gold_1_is.jpg",
                        "iphone_xs_gold_2_is.jpg",
                    ]
                },
            ],

        },

    },
    iPad: [
        {}
    ],
    Mac: [
        {}
    ],
    Accessories: [
        {}
    ]
}

export default data

// exportData = JSON.stringify(data);
