import React from 'react';
import { MyLink, MyHeader } from '../styles/MyHeader.styled';
import { MyHeaderWrapper } from '../styles/MyHeader.styled';

export default function Header() {

    
    return (
        <MyHeaderWrapper>
            <MyHeader>
                <MyLink to='/'>Home</MyLink>
                <br />
                <MyLink to='/users'>Users</MyLink>
                <br />
                <MyLink to='/albums'>Albums</MyLink>
            </MyHeader>
        </MyHeaderWrapper>
    );
}
