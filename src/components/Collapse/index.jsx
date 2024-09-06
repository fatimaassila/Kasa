import { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse" >
      <div className="collapse-content" >
        <h2 className="title">{title}</h2>
        <div className={`svg-inline--fa ${isOpen ? 'rotate' : ''}`} onClick={display}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
       <div className={`description ${isOpen ? 'open' : ''}`}>
        <ul>{content}</ul>
      </div>
    </div>
  )
}

export default Collapse