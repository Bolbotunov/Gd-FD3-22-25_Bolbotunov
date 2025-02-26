import CreateId from "../components/CreateId";
import { getAlbums } from "../api/jsonplaceholder";
import { useEffect, useState } from "react";
import { AlbumsType } from "../api/jsonplaceholder";
import { AlbumLinkStyled } from "../styles/PostPage.styled";
import { PostsUlStyled } from "../styles/PostPage.styled";
import { PostsLiStyled } from "../styles/PostPage.styled";



export function AlbumsPage() {
    const [myAlbums, setMyAlbums] = useState<AlbumsType[]>([])
    
    useEffect(() => {
        async function load() {
            try {
                const albums = await getAlbums()
                console.log(albums)
                setMyAlbums(albums)
            } catch(error) {
                console.error("Ошибка при загрузке альбомов:", error);
            }

        }
        load()
        }, [])

    return (
        <PostsUlStyled>
            {myAlbums.length > 0 && (
                myAlbums.map((item, index) => (
                     <PostsLiStyled key={index}>
                        <AlbumLinkStyled to={`/albums/${item.id}`}>
                            {/* <img src={item.thumbnailUrl} /> */}
                            </AlbumLinkStyled>
                        <h4 style={{fontSize:'14px'}}>{item.title}</h4>
                    </PostsLiStyled>
        ))
        )}
    </PostsUlStyled>

    );
}
