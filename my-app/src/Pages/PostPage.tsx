    import React, { useState, useEffect } from 'react';
    import { getPostsById, JSONServerPost, JSONServerComment, getComments } from "../api/jsonplaceholder"
    import { useParams } from 'react-router-dom';


    export default function PostPage() {
        const { postId } = useParams()

        const [loading, setLoading] = useState<boolean>(false)
        const [post, setPost] = useState<JSONServerPost | null>(null)
        const [comments, setComments] = useState<JSONServerComment[]>([])
    
        useEffect(() => {
        async function load() {
            if (postId) {
                setLoading(true)
                const newPost = await getPostsById(postId)
                const newComments = await getComments(postId)
                setPost(newPost)
                setComments(newComments)
                setLoading(false)
            }
        }
        load()
        }, [])
        return <>
                {loading || !post
                 ? <h4>loading...</h4>
                    : <>
                    <h4>{post?.title}</h4>
                    <div>{post.body}</div>
                        {comments.map(comment => <div>
                            <link>{comment.name}</link>
                            <div> {comment.id} {comment.body}</div>
                     </div>
                            )}
                           
                    </>
                }
         </>       
    }