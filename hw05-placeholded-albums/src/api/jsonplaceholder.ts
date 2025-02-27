
const BASE_URL = 'https://jsonplaceholder.typicode.com'


export type AlbumsType = {
    userId: number;
    id: number;
    title: string;
};

export type PhotoType = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };

type DataType =  AlbumsType[]


type GeoType = {
    lat: string;
    lng: string;
  };

type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoType;
  };

 type CompanyType = {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressType;
    phone: string;
    website: string;
    company: CompanyType;
  };


export async function doFetch<T>(path: string): Promise<T> {
  try {
    const response = await fetch(BASE_URL + path);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const json = await response.json();
    return json as T;
  } catch (error) {
    alert(`Ошибка: ${(error as Error).message} - Сервер JSONPlaceholder не отвечает`);
    throw error;
  }
}


export async function getAlbums() {
    return await doFetch<DataType>('/albums?_limit=30')
}

export async function getPhotosOfAlbums(albumId: string) {
    return await doFetch<PhotoType[]>(`/photos?albumId=${albumId}&_limit=50`)
}


export async function getAlbumById(id: string) {
    return await doFetch<AlbumsType>(`/albums/${id}`)
}

export async function getUsers() {
    return await doFetch<UserType[]>('/users')
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