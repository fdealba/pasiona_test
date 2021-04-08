import { useState, useRef } from "react";
import "./AppListItem.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const AppListItem = ({ content, itemIdx, setItems }) => {
  const [editMode, setEditMode] = useState(false);
  const editItemInput = useRef(null);

  const onEditClickedHandler = () => {
    setEditMode(true);
  };

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      handleEditModeEnd();
    }
  };

  const handleEditModeEnd = () => {
    setItems((previousItems) => {
      const newItems = [...previousItems];
      newItems[itemIdx] = editItemInput.current.value;
      return newItems;
    });
    setEditMode(false);
  };

  const onDeleteClickedHandler = () => {
    setItems((previousItems) =>
      previousItems.filter((item, idx) => idx !== itemIdx)
    );
  };

  return (
    <div className="app-list-item" data-testid="appListItem">
      <div className="content-container">
        {editMode ? (
          <input
            autoFocus
            data-testid="editInput"
            onKeyDown={onKeyDownHandler}
            onBlur={handleEditModeEnd}
            defaultValue={content}
            ref={editItemInput}
          />
        ) : (
          content
        )}
      </div>

      <div className="controls" data-testid="controls">
        <a>
          <FontAwesomeIcon icon={faEdit} onClick={onEditClickedHandler} data-testid="edit"/>
        </a>
        <a>
          <FontAwesomeIcon icon={faTrash} onClick={onDeleteClickedHandler} data-testid="delete"/>
        </a>
      </div>
    </div>
  );
};

export default AppListItem;
