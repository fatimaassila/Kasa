import imgAboutBanner from "../../assets/imgBannerAbout.png";
import Banner from '../../components/Banner'
import Collapse from "../../components/Collapse";
import './style.scss'

const aboutDatas = [
    {
        "id": "1",
        "title": "Fiabilité",
        "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        "id": "2",
        "title": "Respect",
        "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
    },
    {
        "id": "3",
        "title": "Service",
        "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
    },
    {
        "id": "4",
        "title": "Sécurité",
        "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]
function About() {
    return(
        <div>
            <Banner img={imgAboutBanner} />
            <div className='collapse-about'>
             {aboutDatas.map((data, index) => (
              <Collapse
               key={`${data.id}-${index}`}
               title={data.title}
               content={data.content}
              />
             ))}
             </div>
        </div>
    )   
}
export default About