import { ContainerStyle } from '../styles/MyContent.styled';

export default function ContactImage() {
    return (
        <>
          <ContainerStyle>
            <img
              src = {`https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?q=80&w=2070&
              auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt='image'
              style={{ width: '100%', height: 'auto' }}/>
          </ContainerStyle>

        </>
    )
}