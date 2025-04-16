import React from "react";
import { MyLink, MyHeader } from "../styles/MyHeader.styled";
import { MyHeaderWrapper } from "../styles/MyHeader.styled";

export default function Header() {
  return (
    <MyHeaderWrapper>
      <MyHeader>
        <MyLink to="/">First</MyLink>
        <br />
        <MyLink to="/second">Second</MyLink>
        <br />
        <MyLink to="/third">Third</MyLink>
      </MyHeader>
    </MyHeaderWrapper>
  );
}
