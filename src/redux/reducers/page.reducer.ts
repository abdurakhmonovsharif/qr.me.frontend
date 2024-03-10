import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        description: "",
        logo: "",
        password: "",
        site_name: "",
        type: "site",
        view_count: 0,
        site_link: "", qr_code: "",
        theme: "",
        userId: ""
    } as Page,
    reducers: {
        setPage: (state, action: PayloadAction<{ value: string|object, field: keyof Page }>) => {
            const { field, value } = action.payload;
            if (typeof (value) === "string") {
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
                description: "",
                logo: "",
                password: "",
                site_name: "",
                type: "site",
                view_count: 0,
                theme: "",
                userId: "",
                site_link: "", qr_code: ""
            };
        },
    },
});

export const { clearPage, setPage } = pageSlice.actions;
export default pageSlice.reducer;