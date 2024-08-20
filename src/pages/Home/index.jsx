
import imgHomeBanner from '../../assets/imgBanner.png'
import Banner from '../../components/Banner'
import data from '../../data/data.json'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import './style.scss'
function Home() {
  return (   
  <div >
    <Banner title="Chez vous, partout et ailleurs" img={imgHomeBanner} />
    
     {data.map((data, index) => (
      <Link  to={`/Accommodation/${data.id}`} className='card-container'>
       <Card
      key={`${data.id}-${index}`}
      img={data.cover}
      title={data.title}
      location={data.location}
      />
       </Link>
      ))}
   
   </div>
  )
}

export default Home

// {`'/Accommodation/${data.id}`}
