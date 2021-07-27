
import Header from './components/Header.js';
import Items from './components/Items.js';
import AddItem from './components/AddItem.js';

import {useState} from 'react'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Akhil Francis",
      text: "is your friend"
    },
    {
      id: 2,
      name: "Anil",
      text: "is your friend"
    },
    {
      id: 3,
      name: "Arun",
      text: "is your friend"
    }
  ])

  const deleteItems = (id) => {
    setItems(items.filter( (item) => item.id !== id))
  }

  // Add item
  const addItem = (item) => {
    console.log(item);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id , ...item};
    setItems([...items, newItem]);
  }

  return (
    <div className="container">
      <Header />
      <AddItem onAdd={addItem} />
      {items.length > 0 ? <Items items={items} onDelete = {deleteItems} /> : 'No items to show'}
    </div>
  );
}

export default App;
