import React from 'react';
import './App.css';


type TypeGoods = {
  name: string;
  price: number;
  url: string;
  remainder: number;
}

const goods: TypeGoods[] = [
  {
    name: 'apple',
    price: 50,
    url: 'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    remainder: 44,
  },
  {
    name: 'pineapple',
    price: 66,
    url: 'https://plus.unsplash.com/premium_photo-1664391957389-43b217a5f4f3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    remainder: 50,
  },
  {
    name: 'banana',
    price: 72,
    url: 'https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    remainder: 25,
  },
  {
    name: 'tomato',
    price: 50,
    url: 'https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    remainder: 35,
  },
  {
    name: 'peach',
    price: 112,
    url: 'https://images.unsplash.com/photo-1532704868953-d85f24176d73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    remainder: 12,
  }
];


type TypeGoodsNames = string[]
const namesOfColumns: TypeGoodsNames = ['Name of product', 'Price of product', 'Picture', 'Balance in stock'];

type CreateTableProps = {
  goods: TypeGoods[]
}

function CreateTable(props: CreateTableProps) {
  return (
    <table>
      <thead>
        <tr>
        <th colSpan={namesOfColumns.length}>List of goods</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          {namesOfColumns.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
        {props.goods.map((item, index) => {
          return (<tr key = {index}>
            {Object.keys(item).map((key) => {
              return (<td className = 'cell' key = {`${index}-${key}`}>
                {key === 'url' ? ( <img src = {item[key]} alt = {item.name}/> ) : (item[key])}
              </td>)
            })}
          </tr>)
        })}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateTable goods={goods}/>
      </header>
    </div>
  );
}

export default App;

