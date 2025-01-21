import React from 'react';
import './App.css';

function MyExampleComponent(props) {
  console.log('props:', props)
  return null
}


type MyLinkProps = {
  label: string;
}

function MyLink(props: MyLinkProps) {
  console.log('props:', props)
  return (
    <a
    className="App-link"
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.label}
  </a>
  )
}




const MyHello = () => <p>Hello, My component!</p>

const varHello = <MyHello></MyHello>




function App() {
  const links: MyLinkProps[] = [
    {
      label: 'new name',
      url: 'https://mail.ru',
    },
    {
      label: 'new name link',
      url: 'https://google.com',
    },
    {
      label: 'new name link2',
      url: 'https://google.com',
    }
  ]

  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        Hello!
        {links.map((item)=><MyLink
          label ={item.label}
          url = {item.url}
        />)}
        <MyLink
        label = 'new name'
        url ='https://mail.ru'
        />
        <MyLink
        label = 'new name google'
        url ='https://google.by'
        />
        {varHello}
        <MyExampleComponent
        argArray = {['1','2']}
        trueArg = {null}
        data = {{
          name:'oleg',
          age: 33,
          city: true,
        }}
        
        />
      </header>
    </div>
  );
}

export default App;