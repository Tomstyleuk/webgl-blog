// 1. Import microCMS SDK
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

// 2. Connect domain & API key from microCMS
const client = createClient ({
    serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY
});

console.log('API Key:', import.meta.env.VITE_MICROCMS_API_KEY);

// 3. Define type
export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch: {
        url: string;
        height: number;
        width: number;
    }
}

export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
}

// 4. Call API
export const getBlogs = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({
        endpoint: "blogs",
        queries
    })
};

export const getBlogDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries,
    })
}