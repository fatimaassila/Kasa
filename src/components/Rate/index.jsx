import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons"
import './style.scss'
function Rate(rating) {
    const score = rating.score;
    const notes = [1, 2, 3, 4, 5];

    return (
        <div className="rate-container">
            {notes.map((note) =>
                score >= note ? (
                    <FontAwesomeIcon 
                        key={note.toString()} 
                        className="etoile" 
                        icon={faStar} 
                        color=" #FF6060" // Vous pouvez changer la couleur ici
                    />
                ) : (
                    <FontAwesomeIcon 
                        key={note.toString()} 
                        className="etoile" 
                        icon={faStarEmpty} 
                        color="#e4e5e9" // Couleur de l'étoile vide
                    />
                )
            )}
        </div>
    );
}

export default Rate