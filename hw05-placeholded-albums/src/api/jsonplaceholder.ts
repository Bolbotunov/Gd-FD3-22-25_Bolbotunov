
const BASE_URL = 'https://jsonplaceholder.typicode.com'


export type AlbumsType = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

type dataType =  AlbumsType[]

export async function doFetch<T>(path: string) {
    const response = await fetch(BASE_URL + path);
    const json = await response.json();
    return json as T;
}

export async function getAlbums() {
    return await doFetch<dataType>('/photos?_limit=20')
}

export async function getAlbumById(id: string) {
    return await doFetch<AlbumsType>(`/photos/${id}`)
}

// export type JPTodo = {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean
// };

// export type JPComment = {
//     body: string;
//     email: string;
//     id: number;
//     name: string;
//     postId: number;
// }

// export type JPPost = {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// async function doFetch<T>(path: string, queryObject?: Record<string, string | undefined>) {
//     const query = new URLSearchParams()

//     if (queryObject) {
//         Object
//         .entries(queryObject)
//         .forEach(([key, value]) => {
//             if (value) {
//                 query.append(key, value)
//             }
//         })
//     }

//     const response = await fetch(BASE_URL + path + (query ? '?' + query : ''));
//     const json = await response.json();
//     return json as T;
// }

// export async function getTodos(userId?: string) {
//     return await doFetch<JPTodo[]>('/todos', {
//         userId,
//     });
// }

// export async function getTodoById( id: string) {
//     return await doFetch<JPTodo[]>(`/todos/${id}`);
// }

// export async function getPosts(userId? : string) {
//     const query = new URLSearchParams()
//     if(userId) {
//         query.append('userId', userId)
//     }
//     return await doFetch<JPPost[]>(`/posts`, {
//         userId,
//     });
// }

// export async function getPostsById( id: string) {
//     return await doFetch<JPPost>(`/posts/${id}`);
// }



// export async function getComments(postId?: string) {
//     const query = new URLSearchParams()
//     if(postId) {
//         query.append('postId', postId)
//     }
//     return await doFetch<JPComment[]>(`/posts`, {
//         postId,
//     });
// }


// export async function getCommentsById( id: string) {
//     return await doFetch<JPComment>(`/comments/${id}`);
// }