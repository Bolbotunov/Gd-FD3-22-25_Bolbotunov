import { UserType } from "../api/jsonplaceholder"
import { useState, useEffect } from "react"
import { getUsers } from "../api/jsonplaceholder"
import { PostsUlStyled, TitlesStyled, AuthorLinkStyle, AlbumLinkStyled, PostsLiStyled } from "../styles/PostPage.styled"


export function UsersPage() {
    const [myUsers, setMyUsers] = useState<UserType[]>([])
    
    useEffect(() => {
        async function load() {
            try {
                const users = await getUsers()
                console.log(users)
                setMyUsers(users)
            } catch(error) {
                console.error("Ошибка при загрузке юзеров:", error);
            }

        }
        load()
        }, [])


    return (
        <>
        <p>All Users</p>
         <PostsUlStyled>
         {myUsers.length > 0 && (
                myUsers.map((item, index) => (
                     <PostsLiStyled key={index}>
                        <AlbumLinkStyled to={`/users/${item.id}`}>
                            </AlbumLinkStyled>
                        <h4 style={{fontSize:'14px'}}>{item.name}</h4>
                    </PostsLiStyled>
        ))
        )}
    </PostsUlStyled></>
    );
}
