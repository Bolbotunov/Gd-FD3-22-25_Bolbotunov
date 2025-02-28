import { useEffect, useState } from "react";
import { getPhotosOfAlbums, PhotoType } from "../api/jsonplaceholder";
import { PostsUlStyled } from "../styles/PostPage.styled";
import { PicturesOfAlbumsStyled } from "../styles/PostPage.styled";
import { PostsLiStyled } from "../styles/PostPage.styled";
import { AlbumAStyled } from "../styles/PostPage.styled";

export function PhotosPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const queryAlbumId = searchParams.get('albumId');
  const [photos, setPhotos] = useState<PhotoType[]>([]);


  useEffect(() => {
    async function load() {
      if (queryAlbumId) {
        try {
          const receivedPhotos = await getPhotosOfAlbums(queryAlbumId)
          setPhotos(receivedPhotos);
          console.log(receivedPhotos)
        } catch (error) {
          console.error("Ошибка при загрузке фотографий:", error);
        }
      }
    }
    load();
  }, [queryAlbumId]);


  return (
    <>
    <p>All Photos of album # {queryAlbumId }</p>
    <PicturesOfAlbumsStyled style={{display:'flex'}}>
      
      <PostsUlStyled>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <PostsLiStyled key={photo.id}>
              <AlbumAStyled href={photo.url} target="_blank">
                <img src={photo.thumbnailUrl}/>
              </AlbumAStyled>
              <h4 style={{ fontSize: '14px' }}>{photo.title}</h4>
            </PostsLiStyled>
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </PostsUlStyled>
    </PicturesOfAlbumsStyled>
    </>
  );
  
}
