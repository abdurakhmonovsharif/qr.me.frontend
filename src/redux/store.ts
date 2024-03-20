import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./api/auth/auth.api";
import userReducer from "./reducers/user.reducer";
import { theme } from "./api/theme/theme.api";
import { page } from "./api/page/page.api";
import sectionsReducer from "./reducers/sections.reducer";
import htmlReducer from "./reducers/html.reducer";
import pageReducer from "./reducers/page.reducer";
import contactReducer from "./reducers/contact.reducer";
import linkReducer from "./reducers/link.reducer";
import { upload } from "./api/upload/upload.api";
import optionsReducer from "./reducers/options.reducer";
export const store = configureStore({
    reducer: {
        [auth.reducerPath]: auth.reducer,
        [theme.reducerPath]: theme.reducer,
        [page.reducerPath]: page.reducer,
        [upload.reducerPath]: upload.reducer,
        user: userReducer,
        sections: sectionsReducer,
        html: htmlReducer,
        page: pageReducer,
        contact: contactReducer,
        link: linkReducer,
        options: optionsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(auth.middleware).concat(page.middleware).concat(theme.middleware).concat(upload.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);