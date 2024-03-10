import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const linkSlice = createSlice({
    name: "links",
    initialState: [] as Link[],
    reducers: {
        setLinks: (state, action: PayloadAction<{ value: string, index: number }>) => {
            const { value, index } = action.payload;
            if (index !== undefined) {
                state[index].link = value;
            }
            return state;
        },
        addLink: (state, action: PayloadAction<{ img: string }>) => {
            const { img } = action.payload;
            state.push({ link: "", type: "instagram", img });
            return state;
        },
        changeIcon: (state, actions: PayloadAction<{ index1: number, img: string, type: string }>) => {
            const { index1, img, type } = actions.payload;
            if (index1 !== undefined && type !== undefined) {
                state[index1].img = img;
                state[index1].type = type;
            }
            return state;
        },
        deleteLink: (state, actions: PayloadAction<{ index: number }>) => {
            const { index } = actions.payload
            state.slice(index, 1);
            return state;
        },
        clearLinks: () => {
            return [];
        },
    },
});

export const { clearLinks, deleteLink, setLinks, addLink, changeIcon } = linkSlice.actions;
export default linkSlice.reducer;