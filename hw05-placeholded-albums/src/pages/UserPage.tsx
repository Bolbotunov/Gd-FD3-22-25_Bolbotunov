import { useState, useEffect } from "react";
import { UserType } from "../api/jsonplaceholder";
import { getUsersById } from "../api/jsonplaceholder";
import { useNavigate, useParams } from "react-router";
import { ButtonsStyle } from "../styles/MyContent.styled";
import { AlbumsType } from "../api/jsonplaceholder";
import { getAlbums } from "../api/jsonplaceholder";
import { PostsUlStyled } from "../styles/PostPage.styled";
import { PostsLiStyled } from "../styles/PostPage.styled";
import { AlbumLinkStyled } from "../styles/PostPage.styled";

export default function UserPage() {
    const { id } = useParams<{ id: string }>();
    const [myUser, setMyUser] = useState<UserType | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [userAlbums, setUserAlbums] = useState<AlbumsType[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function load() {
            if (id) {
            try {
                const user = await getUsersById(id)
                const albums = await getAlbums(20, 0, id)
                setMyUser(user)
                setUserAlbums(albums);
                setLoading(false);
            } catch(error) {
                console.error("Ошибка при загрузке юзера:", error);
            }
          }
        }
        load()
        }, [id])


        if (!myUser || loading) {
            return <p>Loading...</p>;
          }


          return (
            <>
              <ButtonsStyle onClick={() => navigate('/users')}>Back to users</ButtonsStyle>
              <h1>User with username: {myUser.username}</h1>
              <p>Full name: {myUser.name}</p>
              <p>Email: {myUser.email}</p>
              <p>Company name: {myUser.company.name}</p>
        
              <h2>All Albums of {myUser.name}</h2>
              <PostsUlStyled>
                {userAlbums.length > 0 ? (
                  userAlbums.map((album) => (
                    <PostsLiStyled key={album.id}>
                      <AlbumLinkStyled to={`/albums/${album.id}`}>
                      </AlbumLinkStyled>
                      <h5 style={{ fontSize: '14px'}}>{album.title}</h5>
                    </PostsLiStyled>
                  ))
                ) : (
                  <p>No albums</p>
                )}
              </PostsUlStyled>
            </>
          );
}







