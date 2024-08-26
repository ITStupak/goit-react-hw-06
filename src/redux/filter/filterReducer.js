import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    filterValue: "",
}
const filterSlice = createSlice({
    name: "filter",
    initialState: INITIAL_STATE,
    reducers: {
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const {setFilterValue} = filterSlice.actions;

// export const filterReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "filter/setFilterValue": {
//             return {
//                 ...state,
//                 filterValue: action.payload,
//             };
//         }
//         default:
//             return state;
//     }
// }

// export const setFilterValue = (payload) => {
//     return {
//         type: "filter/setFilterValue",
//         payload
//     }
// }