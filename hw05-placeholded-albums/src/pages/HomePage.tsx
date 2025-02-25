import React, { useEffect, useState } from "react";
import { PASS_SESSION_STORAGE } from "../components/CreateIdPost";
import { QUANTITY_ID } from "../components/CreateIdPost";
import { MyLink } from "../styles/HomePage.styled";

export default function HomePage() {
  const [postId, setPostId] = useState<string | null>(null);
  const [randomPost, setRandomPost] = useState<number | null>(null)

  useEffect(() => {
    const receivedData = sessionStorage.getItem(PASS_SESSION_STORAGE);
    if (receivedData) {
      const parsedData: { [key: string]: number } = JSON.parse(receivedData);
      const arrId = Object.values(parsedData);
      if (arrId.length > 0) {
        let randomId = Math.floor(Math.random() * (QUANTITY_ID) + 1)
        setRandomPost(randomId);
        setPostId(arrId[randomId].toString());
      }
    }
  }, []);

  let myLink = postId ? <MyLink to={`/posts/post/${postId}`}>See any Post</MyLink> : null;

  return (
    <>
      <div>
        <h1>Hello, dear visitor</h1>
        <p> Let's see our posts:  {myLink} </p>
      </div>
    </>
  );
}
