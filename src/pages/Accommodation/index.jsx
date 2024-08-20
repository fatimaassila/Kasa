import Carrousel from "../../components/Carrousel"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from '../../data/data.json'

function Accommodation () {
    const [imageSlider, setImageSlider] = useState([]);
    
    const { id } = useParams();

    const dataCurrentAccommodation = data.find(data => data.id === id);

    useEffect(() => {
        if (dataCurrentAccommodation) {
            setImageSlider(dataCurrentAccommodation.pictures);
        }
    }, [id, dataCurrentAccommodation]);
    
    return(
       <div > 
			<Carrousel imageSlider={imageSlider} />
        </div>
    )   
}
export default Accommodation

