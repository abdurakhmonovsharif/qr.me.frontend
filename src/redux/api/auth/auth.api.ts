import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../base.api";

export const auth = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<any, { password: string }>({
            query: ({ password }) => ({
                url: "auth/sign_in",
                method: "POST",
                body: { password },
            }),
        }),
        register: builder.mutation<String, Partial<User>>({
            query: (user) => ({
                url: "auth/sign_up",
                method: "POST",
                body: user,
            }),
        }),
        getMe: builder.query<User, void>({
            query: () => ({
                url: "auth/me",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery } = auth;