import { useState } from "react"

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false)
    const display = () => {
        setIsOpen(!isOpen);
      };
    
      return (
        // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
        <div >
          <div >
            <h2>{title}</h2>
            <p onClick={display}>
              {isOpen ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </p>
          </div>
          {/* Si le collapse est à TRUE alors il affichera la description */}
          <div >
            {isOpen && <p>{content}</p>}
          </div>
        </div>
      );
    };
    
    export default Collapse
