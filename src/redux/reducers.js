import {ADD_TEXT} from "./types";

// data: [
// {
//     tag:"div",
//     align: "center",
//     text: "hello, my dear friend",
//     style: {
//         bold_chunks: [
//             [0, 5],
//             [10, 12]
//         ],
//
//         underline_chunks: [
//             [0, 5],
//             [10, 12]
//         ],
//
//         italic_chunks: [
//             [
//                 [0, 5],
//                 [10, 12]
//             ]
//         ],
//
//
//         fonts_chunks: [
//             {start: 0, end: 10, font_title: "Roboto"}
//         ]
//     }
// }

// document.createElement("div")
// ],

const INITIAL_DATA = {
    current_line: null,
    domElement: document.createElement("div")
};


export function EditorReducer (state=INITIAL_DATA, action) {
    switch (action.type) {
        // case ADD_TEXT:
            // если блоков разметки не существует - создаём новый
            // if (!state.data.length) {
            //     return {...state, data: [{id: 0, action.text}]};
            // }

            // если блоки разметки существуют
            // else if (state.data.length) {
            //     let state_copy = state;
                // state_copy
                // return state_copy;
            // }

        default:
            return state;
    }
}


