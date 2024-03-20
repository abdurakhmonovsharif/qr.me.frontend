import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        type: "blog",
        view_count: 0,
        qr_code: "",
        theme: "",
        userId: "",
    } as Page,
    reducers: {
        setPage: (state, action: PayloadAction<{ value: string | object | number, field: keyof Page }>) => {
            const { field, value } = action.payload;
            if (typeof (value) === "string" || typeof (value) === "number") {
                return {
                    ...state,
                    [field]: value
                }
            } else if (typeof (value) === "object") {
                return {
                    ...state,
                    [field]: value
                }
            }
        },
        clearPage: () => {
            return {
                type: "blog",
                view_count: 0,
                qr_code: "",
                theme: "",
                userId: "",
            };
        },
    },
});

export const { clearPage, setPage } = pageSlice.actions;
export default pageSlice.reducer;