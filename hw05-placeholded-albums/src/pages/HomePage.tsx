import React, { useEffect, useState } from "react";
import { PASS_SESSION_STORAGE } from "../components/CreateId";
import { QUANTITY_ID } from "../components/CreateId";
import { MyLink } from "../styles/HomePage.styled";

export default function HomePage() {
  const [albumId, setAlbumId] = useState<string | null>(null);
  const [randomAlbum, setRandomAlbum] = useState<number | null>(null)

  useEffect(() => {
    const receivedData = sessionStorage.getItem(PASS_SESSION_STORAGE);
    if (receivedData) {
      const parsedData: { [key: string]: number } = JSON.parse(receivedData);
      const arrId = Object.values(parsedData);
      if (arrId.length > 0) {
        let randomId = Math.floor(Math.random() * (QUANTITY_ID) + 1)
        setRandomAlbum(randomId);
        setAlbumId(arrId[randomId].toString());
      }
    }
  }, []);

  let myLink = albumId ? <MyLink to={`/albums/album/${albumId}`}>See any album</MyLink> : null;

  return (
    <>
      <div>
        <h1>Hello, dear visitor</h1>
        <p> Let's see our posts:  {myLink} </p>
      </div>
    </>
  );
}
