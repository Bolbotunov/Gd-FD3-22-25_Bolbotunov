import { useEffect, useState } from "react";
import { AlbumsType, getAlbumById } from "../api/jsonplaceholder";
import { useParams } from "react-router";
import { PostsUlStyled } from "../styles/PostPage.styled";


export function AlbumPage() {
  const { id } = useParams<{ id: string }>();
  const [myAlbum, setMyAlbum] = useState<AlbumsType | null>(null);

  useEffect(() => {
    async function load() {
      if (id) {
        try {
          const album = await getAlbumById(id);
          setMyAlbum(album);
        } catch (error) {
          console.error("Ошибка при загрузке альбома:", error);
        }
      }
    }
    load();
  }, [id]);

  return (
    <PostsUlStyled>
      {myAlbum ? (
        <>
          <h1>Album number: {myAlbum.id}</h1>

          <img src={myAlbum.url} />

          <p>{myAlbum.title}</p>
          <p>Link of album: {myAlbum.url}</p>
        </>
      ) : (
        <p>loading album...</p>
      )}
    </PostsUlStyled>
  );
}
