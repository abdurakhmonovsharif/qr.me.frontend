import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        address: "", email: "", fullname: "", map: "", phoneNumber: ""
    } as Contact,
    reducers: {
        setContact: (state, action: PayloadAction<{ value: string, field: keyof Contact }>) => {
            const { value, field } = action.payload;
            state[field] = value;
            return state;
        },
        clearContat: () => {
            return {
                address: "", email: "", fullname: "", map: "", phoneNumber: ""
            };
        },
    },
});

export const { clearContat,setContact} = contactSlice.actions;
export default contactSlice.reducer;