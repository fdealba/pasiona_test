import './AppListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const AppListItem = ({ content }) => {
  return (
    <div className="app-list-item">
      <div className="content-container">
        { content }
      </div>

      <div className="controls">
        <a><FontAwesomeIcon icon={faEdit} /></a>
        <a><FontAwesomeIcon icon={faTrash} /></a>
      </div>
    </div>
  )
}

export default AppListItem;