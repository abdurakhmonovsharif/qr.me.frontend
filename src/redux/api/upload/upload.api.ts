import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../base.api";
export const upload = createApi({
    reducerPath: "uploadApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        uploadFile: builder.mutation<any, Partial<FormData>>({
            query: (formData) => ({
                url: 'upload',
                method: "POST",
                body: formData,
            })
        }),
    }),
});

export const { useUploadFileMutation } = upload;
