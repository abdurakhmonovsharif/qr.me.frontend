import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../base.api";

export const auth = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<any, { password: string, url: string }>({
            query: ({ password,url }) => ({
                url: "auth/sign_in",
                method: "POST",
                body: { password, url },
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
        passwordFound: builder.query<boolean, { url: string }>({
            query: ({ url }) => ({
                url: `auth/password_found/${url}`,
            }),
        }),
        createPassword: builder.mutation<any, { url: string, password: string }>({
            query: ({ password, url }) => ({
                url: "auth/sign_in_new_passsword",
                method: "POST",
                body: { password, url },
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery, usePasswordFoundQuery, useCreatePasswordMutation } = auth;