import { useEffect, useState } from "react";
import db from "../nedb/items";

import { CreateItem } from "../Components/CreateItem";
import { TODOItems } from "../Components/TODOItems";
import Navbar from "../layout/Navbar";

function Todo() {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    db.find({}, (err, docs) => {
      if (!err) {
        setItems(docs);
      }
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <CreateItem items={items} setItems={setItems} />
      <TODOItems items={items} setItems={setItems} />
    </div>
  );
}

export default Todo;
