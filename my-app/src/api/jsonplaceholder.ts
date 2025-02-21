const BASE_URL = 'https://jsonplaceholder.typicode.com'

export type JSONServerTodo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export type JSONServerComment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export type JSONServerPost = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

async function doFetch<T>(path: string, queryObject?: Record<string, string | undefined>) {
    const query = new URLSearchParams()

    if (queryObject) {
        Object
        .entries(queryObject)
        .forEach(([key, value]) => {
            if (value) {
                query.append(key, value)
            }
        })
    }

    const response = await fetch(BASE_URL + path + (query ? '?' + query : ''));
    const json = await response.json();
    return json as T;
}

export async function getTodos(userId?: string) {
    return await doFetch<JSONServerTodo[]>('/todos', {
        userId,
    });
}

export async function getTodoById( id: string) {
    return await doFetch<JSONServerTodo[]>(`/todos/${id}`);
}

export async function getPosts(userId? : string) {
    const query = new URLSearchParams()
    if(userId) {
        query.append('userId', userId)
    }
    return await doFetch<JSONServerPost[]>(`/posts`, {
        userId,
    });
}

export async function getPostsById( id: string) {
    return await doFetch<JSONServerPost>(`/posts/${id}`);
}



export async function getComments(postId?: string) {
    const query = new URLSearchParams()
    if(postId) {
        query.append('postId', postId)
    }
    return await doFetch<JSONServerComment[]>(`/posts`, {
        postId,
    });
}


export async function getCommentsById( id: string) {
    return await doFetch<JSONServerComment>(`/comments/${id}`);
}
