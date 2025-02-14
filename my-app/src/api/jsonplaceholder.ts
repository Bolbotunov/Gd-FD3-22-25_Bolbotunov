const BASE_URL = 'https://jsonplaceholder.typicode.com'

export type JSONServerTodo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

async function doFetch<T>(path: string) {
    const response = await fetch(BASE_URL + path);
    const json = await response.json();
    return json as T;
}


export async function getTodos() {
    return await doFetch<JSONServerTodo[]>('/todos');
}

export async function getTodoById( id: string) {
    return await doFetch<JSONServerTodo[]>(`/todos/${id}`);
}

export async function getPosts(userId? : string) {
    const query = new URLSearchParams()
    if(userId) {
        query.append('userId', userId)
    }
    return await doFetch(`/posts${query ? '?' + query : ''}`);
}



