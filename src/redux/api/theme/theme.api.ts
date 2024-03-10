import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../base.api";
export const theme = createApi({
    reducerPath: "themeApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getThemes: builder.query<Theme[], void>({
            query: () => "themes",
        }),
        postTheme: builder.mutation<Theme, Partial<Theme>>({
            query: (theme) => ({
                url: 'themes',
                method: "POST",
                body: theme,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
        }),
        updateTheme: builder.mutation<Theme, { id: string; theme: Partial<Theme> }>({
            query: ({ id, theme }) => ({
                url: `themes/${id}`,
                method: "PUT",
                body: theme,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
        deleteTheme: builder.mutation<void, string>({
            query: (id) => ({
                url: `themes/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
    }),
});

export const { useGetThemesQuery, usePostThemeMutation, useUpdateThemeMutation, useDeleteThemeMutation } = theme;
