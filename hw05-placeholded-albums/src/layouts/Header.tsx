import React from 'react';
import { MyLink, MyHeader } from '../styles/MyHeader.styled';
import { MyHeaderWrapper } from '../styles/MyHeader.styled';

export default function Header() {

    
    return (
        <MyHeaderWrapper>
            <MyHeader>
                <MyLink to='/'>Home</MyLink>
                <br />
                <MyLink to='/contact'>Contacts</MyLink>
                <br />
                <MyLink to='/contact/about'>About</MyLink>
                <br />
                <MyLink to='/contact/terms'>Terms</MyLink>
                <br />
                <MyLink to='/posts'>Posts</MyLink>
            </MyHeader>
        </MyHeaderWrapper>
    );
}
