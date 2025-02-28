import { getAlbums } from "../api/jsonplaceholder";
import { useEffect, useState } from "react";
import { AlbumsType } from "../api/jsonplaceholder";
import { AlbumLinkStyled } from "../styles/PostPage.styled";
import { PostsUlStyled } from "../styles/PostPage.styled";
import { PostsLiStyled } from "../styles/PostPage.styled";
import { ButtonsStyle } from "../styles/MyContent.styled";


export function AlbumsPage() {
    const [myAlbums, setMyAlbums] = useState<AlbumsType[]>([])
    const [quantity, setQuantity] = useState(0)
    const [loading, setLoading] = useState(false)
    const searchParams = new URLSearchParams(window.location.search);
    const queryUserId = searchParams.get('userId');
    const limit = 20

    useEffect(() => {
            setMyAlbums([]);
            setQuantity(0);
      }, [queryUserId]);
      
    
    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const albums = await getAlbums(limit, quantity, queryUserId || undefined)
                setMyAlbums((prevAlbums) => [...prevAlbums, ...albums])
            } catch(error) {
                console.error("Ошибка при загрузке альбомов:", error);
            } finally {
                setLoading(false);
              }

        }
        load()
        }, [quantity, queryUserId])

        function loadMore() {
            setQuantity((prevQuantity) => prevQuantity + limit)
        }

    return (
        <>
       <p>All Albums {queryUserId ? `of User ${queryUserId}` : ''}</p>
        <PostsUlStyled>
            {myAlbums.length > 0 && (
                myAlbums.map((item, index) => (
                     <PostsLiStyled key={index}>
                        <AlbumLinkStyled to={`/albums/${item.id}`}>
                            </AlbumLinkStyled>
                        <h4 style={{fontSize:'14px'}}>{item.title}</h4>
                    </PostsLiStyled>
        ))
        )}
        
    </PostsUlStyled>
    {!queryUserId ? (
    <>
    <ButtonsStyle onClick={loadMore}>load more albums...</ButtonsStyle>
    {loading && <p>loading...</p>}
    </>
    ) : ('')
    }
    </>
    );
}
