import {ADD_TEXT} from "./types";

export const add_text = (block_id, line_id, char_index, text) => (state) => ({
    type: ADD_TEXT,
    block_id,
    line_id,
    char_index,
})
