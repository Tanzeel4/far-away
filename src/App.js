// import logo from './logo.svg';
import './App.css';
import Logo from "./logo/Index"
import Form from "./form/index.js"
import PackingList from "./packing list/Index.js"
import Stats from "./stats/index.js"
import { useState } from 'react';

function App() {
  const [itemList, setItemList] = useState([])
  console.log(itemList);

  return (
    <div>
      <Logo />
      <Form itemList={itemList} setItemList={setItemList} />
      <PackingList itemList={itemList} setItemList={setItemList} />
      <Stats itemList={itemList} />
    </div>
  )
}

export default App;