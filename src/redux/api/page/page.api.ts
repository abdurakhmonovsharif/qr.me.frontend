import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../base.api";

export const page = createApi({
    reducerPath: "pageApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getPages: builder.query<Page[], void>({
            query: () => "pages",
        }),
        getPageByUserId: builder.query<Page, string>({
            query: (id) => `pages?user_id=${id}`,
        }),
        createPage: builder.mutation<Page, Partial<Page>>({
            query: (page) => ({
                url: 'pages',
                method: "POST",
                body: page,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
        }),
        publishPage: builder.mutation<any, Partial<FormData>>({
            query: (formData) => ({
                url: 'publish',
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
        }),
        updatePage: builder.mutation<Page, { id: string; page: Partial<Page> }>({
            query: ({ id, page }) => ({
                url: `pages/${id}`,
                method: "PUT",
                body: page,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
        deletePage: builder.mutation<void, string>({
            query: (id) => ({
                url: `pages/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
    }),
});

export const { useGetPagesQuery,usePublishPageMutation, useGetPageByUserIdQuery, useCreatePageMutation, useUpdatePageMutation, useDeletePageMutation } = page;