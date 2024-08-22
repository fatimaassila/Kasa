import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Error() {
    return(
        <div className='error-container'>
         <h3 className='not-found'>404 </h3>
         <p className='error-txt'>
         Oups! La page que <span className="break">vous demandez n'existe pas</span>.
         </p>
         <Link to="/" className='redirection'>
          Retourner sur la page d'accueil
        </Link>
        </div>
    )
}

export default Error