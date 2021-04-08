// Styles
import "./AppEditableList.css";
import AppListItem from "../AppListItem/AppListItem";
import { useState, useRef, useEffect } from "react";

const AppEditableList = () => {
  const addItemInput = useRef(null);
  const [items, setItems] = useState([]);

  // Clean input field after adding an item
  useEffect(() => {
    addItemInput.current.value = "";
  }, [items])

  const onAddItemHandler = () => {
    if (addItemInput.current.value) {
      setItems((previousItems) => [...previousItems, addItemInput.current.value]);
    }
  };

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      onAddItemHandler()
    }
  }

  const listItems = items.map((item, idx) => (
    <AppListItem key={idx} content={item} itemIdx={idx} setItems={setItems} />
  ));

  return (
    <div className="app-editable-list">
      <div className="new-item-container">
        <input type="text" onKeyDown={onKeyDownHandler} ref={addItemInput} />
        <div className="submit" onClick={onAddItemHandler}>
          Add item
        </div>
      </div>
      {listItems}
    </div>
  );
};

export default AppEditableList;
