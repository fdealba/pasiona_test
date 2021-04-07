// Styles
import "./AppEditableList.css";
import AppListItem from '../AppListItem/AppListItem';
import { useState, useRef } from "react";

const AppEditableList = () => {
  const addItemInput = useRef(null);

  const addItemHandler = (event) => {
    console.log(addItemInput.current.value);
  }

  return (
  <div className="app-editable-list">
    <div className="new-item-container">
      <input type="text" ref={addItemInput}/>
      <div className="submit" onClick={addItemHandler}>Add item</div>
    </div>
    <AppListItem content="hi i am app list item"/>
    <AppListItem content="hi i am app list item"/>
    <AppListItem content="hi i am app list item"/>
    <AppListItem content="hi i am app list item"/>
    <AppListItem content="hi i am app list item"/>
  </div>
  );
};

export default AppEditableList;
