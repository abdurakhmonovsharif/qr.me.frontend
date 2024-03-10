import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const sectionsSlice = createSlice({
    name: "sections",
    initialState: [{
        type: "sliders",
        imageURL: "",
        title: "",
        content: "",
        sliders: [{ imageURL: "", title: "" }],
    }] as Section[],
    reducers: {
        setSectionType: (state, action: PayloadAction<{ index: number | undefined; type: string }>) => {
            const { index, type } = action.payload;
            if (index !== undefined) {
                state[index].type = type;
            }
        },
        setSections: (state, action: PayloadAction<{
            index: number | undefined; field: keyof Section; value: string, slideIndex: number | undefined, slideInputType: keyof Slider | undefined
        }>) => {
            const { index, field, value, slideIndex, slideInputType } = action.payload;
            if (index !== undefined && field) {
                if (field === "sliders" && slideIndex !== undefined && slideInputType !== undefined) {
                    state[index].sliders[slideIndex][slideInputType] = value;
                } else {
                    state[index] = {
                        ...state[index],
                        [field]: value,
                    };
                }
            }
        },
        addSection: (state) => {
            state.push({
                type: "text",
                imageURL: "",
                title: "",
                content: "",
                sliders: [{ imageURL: "", title: "" }],
            });
        },
        addSlider: (state, action: PayloadAction<{ index: number | undefined }>) => {
            const { index } = action.payload;
            if (index !== undefined) {
                state[index].sliders.push({ imageURL: "", title: "" });
            }
        },
        deleteBlock: (state, action: PayloadAction<{ index: number }>) => {
            const { index } = action.payload;
            state.splice(index, 1);
            return state;
        },
        deleteSlide: (state, action: PayloadAction<{ index: number | undefined; slideIndex: number }>) => {
            const { index, slideIndex } = action.payload;
            if (index !== undefined) {
                state[index].sliders.splice(slideIndex, 1);
            }
        },
        clearSections: () => {
            return [{
                type: "text",
                imageURL: "",
                title: "",
                content: "",
                sliders: [{ imageURL: "", title: "" }],
            }];
        },
    },
});

export const { clearSections, setSectionType, addSlider, deleteSlide, setSections, addSection,deleteBlock } = sectionsSlice.actions;
export default sectionsSlice.reducer;
