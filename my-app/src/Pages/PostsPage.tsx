import { getPosts, JSONServerPost, JSONServerComment, getComments } from "../api/jsonplaceholder"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'

export default function PostsPage() {
  const [posts, setPosts] = useState<JSONServerPost[]>([])

  useEffect(() => {
    async function load() {
      const newPosts = await getPosts();
      const newComments =  await getComments()
      setPosts(newPosts)
    }
    load()
  }, [])

    return (
        <>
         <h4>Posts</h4>
         <div style={{display:'flex', width:'90%', flexDirection:'column', alignItems:'center', gap:'30px', justifyContent:'center'}}>
          {posts.map(item => (
            <div key={item.id} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'30px', justifyContent:'center'}}>
              <div style={{ backgroundColor:'#f1d3d3'}}>
              <div style={{fontWeight:'600', color:'#a6a005', width:'90%'}}>{item.title}</div>
              <div style={{width:'90%', padding:'20px', color:'black', fontSize:'16px'}}>{item.body}</div>
              <Link to={`/posts/${item.id}`}>{item.title.slice(0,20)}</Link>
              </div>
              </div>
          ))}
         </div>
        </>
    )
}