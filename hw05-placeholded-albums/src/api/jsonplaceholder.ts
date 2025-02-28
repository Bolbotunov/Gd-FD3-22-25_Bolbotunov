
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

export async function getAlbums(limit: number, quantity: number, userId?: string) {
  let url = `/albums?_limit=${limit}&_start=${quantity}`;
  if (userId) {
    url += `&userId=${userId}`;
  }
  return await doFetch<DataType>(url);
}



export async function getPhotosOfAlbums(albumId?: string) {
    const query = new URLSearchParams();

    if(albumId) {
      query.append('albumId', albumId)
    }

    return await doFetch<PhotoType[]>(`/photos?albumId=${albumId}`)
}


export async function getAlbumById(id: string) {
    return await doFetch<AlbumsType>(`/albums/${id}`)
}

export async function getUsers() {
    return await doFetch<UserType[]>('/users')
}

export async function getUsersById(id: string) {
  return await doFetch<UserType>(`/users/${id}`)
}