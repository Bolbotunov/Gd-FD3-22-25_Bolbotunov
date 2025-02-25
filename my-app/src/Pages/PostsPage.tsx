import { useDispatch } from "react-redux";
import { actions, useTypedSelector } from "../stores/store";
import { createPost, getPosts, JSONServerPost } from "../api/jsonServer";
import { AddPostButton } from "../components/AddPostButton"
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router'

export default function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPostId, setSelectedPostId] = useState<JSONServerPost['id'] | null>(null);
  const { posts } = useTypedSelector((store) => store.postSlice);
  
  const dispatch = useDispatch();
  
  const userId = searchParams.get('userId');
  useEffect(() => {
      async function load() {
          const newPosts = await getPosts(userId ?? '');
          dispatch(actions.postSlice.init(newPosts));
      }
      load();
  }, [])


  useEffect(() => {
      async function load() {
          // try {
              const newPosts = await getPosts(userId ?? '');
              dispatch(actions.postSlice.init(newPosts));

          // } catch() {}
      }
      load();
  }, [])
    return (
        <>
         <h4>Posts</h4>
         <AddPostButton 
            postId={selectedPostId} 
            onCancel={() => setSelectedPostId(null)}
        /><br></br>
         <div style={{display:'flex', width:'90%', flexDirection:'column', alignItems:'center', gap:'30px', justifyContent:'center'}}>
          {posts.map(item => (
            <div key={item.id} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'30px', justifyContent:'center'}}>
              <div style={{ backgroundColor:'#f1d3d3'}}>
              <div style={{width:'90%', padding:'20px', color:'black', fontSize:'16px'}}>{item.body}</div>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>

              <div>{item.body}</div>
              <button
                        onClick={() => setSelectedPostId(item.id)}>
                            Edit
                    </button>

              </div>
              </div>
          ))}
         </div>
        </>
    )
}