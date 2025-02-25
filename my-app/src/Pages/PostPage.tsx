    import React, { useState, useEffect } from 'react';
    import { getPostsById, JPPost, JPComment } from "../api/jsonplaceholder"
    import { useParams } from 'react-router';
    import { Link, useSearchParams } from 'react-router'
    import { actions, useTypedSelector } from "../stores/store";
    import { useDispatch } from "react-redux";
    import { getPostById, getComments, JSONServerComment, JSONServerPost } from "../api/jsonServer";
    import { AddCommentButton } from "../components/AddCommentButton";


    export default function PostPage() {
        const { postId } = useParams();
        const [loading, setLoading] = useState<boolean>(false);
        const [comments, setComments] = useState<JSONServerComment[]>([]);
        const { selectedPost, posts } = useTypedSelector((store) => store.postSlice);
        
        const dispatch = useDispatch();
    
        function commentAddedCallback(newComment: JSONServerComment) {
            setComments(prev => [...prev, newComment]);
        }
            
            useEffect(() => {
                async function load() {
                        if (postId) {
                            setLoading(true);
                            const newPost = await getPostById(postId);
                            dispatch(actions.postSlice.initPost(newPost));
                            setLoading(false);
                        }
                }
                load();
    
            }, [postId]);
    
            useEffect(() => {
                if (postId) {
                    dispatch(actions.postSlice.select(postId));
                }

                return () => {
                    dispatch(actions.postSlice.unselect());
                }
            }, [postId]);

            useEffect(() => {
                async function load() {
                    if (postId) {
                        const newCommnets = await getComments(postId);
                        setComments(newCommnets);
                    }
                }
                load();
            }, [selectedPost?.id])
    


        return <>
                {loading || !selectedPost
                 ? <h4 style={{fontSize:'40px'}}>loading...</h4>
                    : <>
                    <h4 style={{fontSize:'30px', color:'green'}}>{selectedPost.title}</h4>
                    <div style={{backgroundColor:'#a5d48f', color:'black'}}>{selectedPost.body}</div>
                    <AddCommentButton 
                    postId={postId!} 
                    commentAddedCallback={commentAddedCallback}
                />

                        {comments.map(comment => <div>
                            <link>{comment.name}</link>
                            <div style={{backgroundColor:'#444644', color:'#ffffff', marginBottom:'20px'}}> {comment.id} {comment.body}</div>
                     </div>
                            )}
                    </>
                }
         </>       
    }