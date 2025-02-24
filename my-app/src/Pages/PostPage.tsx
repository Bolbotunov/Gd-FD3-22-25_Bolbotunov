    import React, { useState, useEffect } from 'react';
    import { getPostsById, JSONServerPost, JSONServerComment, getComments } from "../api/jsonplaceholder"
    import { useParams } from 'react-router';
    import { Link, useSearchParams } from 'react-router'


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
                 ? <h4 style={{fontSize:'40px'}}>loading...</h4>
                    : <>
                    <h4 style={{fontSize:'30px', color:'green'}}>{post?.title}</h4>
                    <div style={{backgroundColor:'#a5d48f', color:'black'}}>{post.body}</div>
                        {comments.map(comment => <div>
                            <link>{comment.name}</link>
                            <div style={{backgroundColor:'#444644', color:'#ffffff', marginBottom:'20px'}}> {comment.id} {comment.body}</div>
                     </div>
                            )}
                           
                    </>
                }
         </>       
    }