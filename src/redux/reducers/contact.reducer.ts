import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        address: "your address", email: "your email", fullname: "your fullname", map: "", phoneNumber: "your phone number"
    } as Contact,
    reducers: {
        setContact: (state, action: PayloadAction<{ value: string, field: keyof Contact }>) => {
            const { value, field } = action.payload;
            state[field] = value;
            return state;
        },
        clearContact: () => {
            return {
                address: "", email: "", fullname: "", map: "", phoneNumber: ""
            };
        },
    },
});

export const { clearContact, setContact } = contactSlice.actions;
export default contactSlice.reducer;