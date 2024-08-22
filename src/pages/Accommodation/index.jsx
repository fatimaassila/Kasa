import './style.scss'
import Carousel from "../../components/Gallery"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from '../../data/data.json'
import Error from "../../pages/Error"
 import Tag from "../../components/Tag"
 import Rate from '../../components/Rate'
import Collapse from "../../components/Collapse"


function Accommodation () {
    const [imageSlider, setImageSlider] = useState([]);
    
    const { id } = useParams();

    const dataCurrentAccommodation = data.find(data => data.id === id);

    useEffect(() => {
        if (dataCurrentAccommodation) {
            setImageSlider(dataCurrentAccommodation.pictures);
        }
    }, [id, dataCurrentAccommodation]);

    if (!dataCurrentAccommodation) {
		return <Error/>;
	}
    
    return(
        <div className="accommodation"> 
			<Carousel imageSlider={imageSlider} />

            <div className="container">
                <div className='info-container'>
                    <div className='title-location'>
                      <h1>{dataCurrentAccommodation.title}</h1>
                      <p>{dataCurrentAccommodation.location}</p>
                    </div>

                    <div className='tags'>
                      {dataCurrentAccommodation.tags.map((tag, index) => 
				       <Tag key={index} tag={tag}/>
				       )}			
				    </div> 
                </div>

                <div className='host-tag'>
                    
                    <div className="host">
                      <p>{dataCurrentAccommodation.host.name}</p>
                      <img src= {dataCurrentAccommodation.host.picture}/>
                    </div>
                    
                    <div className='rate'>
                     <Rate score={dataCurrentAccommodation.rating} />
                    </div>
                </div>
            </div>

            <div className='collapse-container'>
                <Collapse
                 title={'Description'}
                 content={dataCurrentAccommodation.description}
                />
                <Collapse
                  title={'Equipments'}
                  content={
                    <ul>
                      {dataCurrentAccommodation.equipments.map((equipment, index) => (
                     <li key={index}>{equipment}</li>
                      ))}
                    </ul>
                    }
                />
            </div>
        </div>
    )   
}
export default Accommodation

