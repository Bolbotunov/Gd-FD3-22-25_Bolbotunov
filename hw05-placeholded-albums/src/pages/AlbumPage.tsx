import { useEffect, useState } from "react";
import { AlbumsType, getAlbumById } from "../api/jsonplaceholder";
import { useParams } from "react-router";
import { PostsUlStyled } from "../styles/PostPage.styled";
import { useNavigate } from "react-router";
import { ButtonsStyle } from "../styles/MyContent.styled";
import { AlbumLinkStyled } from "../styles/PostPage.styled";
import { TitlesStyled } from "../styles/PostPage.styled";
import { PicturesOfAlbumsStyled } from "../styles/PostPage.styled";
import { getPhotosOfAlbums } from "../api/jsonplaceholder";
import { PhotoType } from "../api/jsonplaceholder";
import { PostsLiStyled } from "../styles/PostPage.styled";
import { AlbumAStyled } from "../styles/PostPage.styled";
import { AuthorLinkStyle } from "../styles/PostPage.styled";




export function AlbumPage() {
  const { id } = useParams<{ id: string }>();
  const [myAlbum, setMyAlbum] = useState<AlbumsType | null>(null);
  const [myPhotos, setMyPhotos] = useState<PhotoType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      if (id) {
        try {
          const album = await getAlbumById(id);
          const photos = await getPhotosOfAlbums(id)
          const user = await getPhotosOfAlbums(id)
          setMyAlbum(album);
          setMyPhotos(photos);
          console.log(photos)
        } catch (error) {
          console.error("Ошибка при загрузке альбома:", error);
        }
      }
    }
    load();
  }, [id]);

  return (
    <>
    <div style={{display:'flex', marginTop:'20px'}}>
    <ButtonsStyle onClick={() => navigate('/albums')}>Back to albums</ButtonsStyle>
    </div>
    <PostsUlStyled style={{flexDirection:'column'}}>
      {myAlbum ? (
        <>
          <h3>Album name: <TitlesStyled>{myAlbum.title}</TitlesStyled></h3>
          <AuthorLinkStyle  to= {`/albums?userId=${myAlbum.userId}`}> == Open author page == </AuthorLinkStyle >
          <AlbumLinkStyled to={'/albums'} style={{width:'50%'}}>
          <AlbumLinkStyled to={`/photos?albumId=${myAlbum.id}`}>
            View Photos
          </AlbumLinkStyled>
          </AlbumLinkStyled>
         
          <p>Link of album: {myPhotos[myAlbum.id - 1].url}</p>
        </>
      ) : (
        <p>loading album...</p>
      )}
    </PostsUlStyled>


    <PicturesOfAlbumsStyled>
    <PostsUlStyled>
          {myPhotos.length > 0 ? (
            myPhotos.map((item) => (
              <PostsLiStyled key={item.id}>
                <AlbumAStyled href={item.url} target="_blank">
                  <img src={item.thumbnailUrl}/>
                </AlbumAStyled>
       


                <h4 style={{ fontSize: '14px' }}>{item.title}</h4>
              </PostsLiStyled>
            ))
          ) : (
            <p>loading photos...</p>
          )}
        </PostsUlStyled>

    </PicturesOfAlbumsStyled>
    </>
  );
}

