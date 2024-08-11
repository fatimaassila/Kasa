import './style.scss'

function Card ({img ,title,location}){
    return(
        <div className="card">
            <img src={img} alt='{title}'/>
            <h2 className='card_title'>{title}</h2>
            <p className='text'>{location}</p>
        </div>
    )
}

export default Card