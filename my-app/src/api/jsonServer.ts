import { FormMethod } from "react-router";
import { queryObjects } from "v8";

const BASE_URL = 'http://localhost:3001';

export type JSONServerComment = {
    postId: JSONServerPost['id'];
    body: string;
    email: string;
    id: string;
    name: string;
}

export type JSONServerPost = {
    id: string;
    title: string;
    body: string;
}

async function doFetch<T, R = unknown>(
    path: string, 
    queryObject?: Record<string, string | undefined> | null,
    method?: FormMethod,

    body?: R,
) {
    const query = new URLSearchParams();

    if(queryObject) {
        Object
            .entries(queryObject)
            .forEach(([key, value]) => {
                if (value) {
                    query.append(key, value);
                }
            })
    }

    const response = await fetch(
        BASE_URL + path + (query ? '?' + query : ''), 
        {
            method,
            ...(method !== "GET" && body
             ? {headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify(body)
            } : {}),
        });
    const json = await response.json();
    
    return json as T;
}

export async function getPosts(userId?: string) {
    return await doFetch<JSONServerPost[]>('/posts', {
        userId,
    });
}

export async function createPost(data: Omit<JSONServerPost, 'id'>) {
   return await doFetch<JSONServerPost>('/posts', null, 'POST', data)
}

export async function updatePost(postId: JSONServerPost['id'], data: Partial<Omit<JSONServerPost, 'id'>>) {
    return await doFetch<JSONServerPost>(`/posts/${postId}`, null, 'PATCH', data)
 }

export async function getPostById(id: string) {
    return await doFetch<JSONServerPost>(`/posts/${id}`);
}


export async function getComments(postId?: string) {
    return await doFetch<JSONServerComment[]>(`/comments`,{ postId });
}

export async function getCommnetById(id: string) {
    return doFetch<JSONServerComment>(`/comments/${id}`);
}

export async function createComment(data: Omit<JSONServerComment, 'id'>) {
    return await doFetch<JSONServerComment>('/comments', null, 'POST', data)
 }