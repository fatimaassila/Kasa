
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
    <div className='card-container'>
    {data.map((data, index) => (
      <Link  key={data.id} to={`/Accommodation/${data.id}`} className='link'>
       <Card
       img={data.cover}
       title={data.title}
       location={data.location}
       />
       </Link>
      ))}
    </div>
   </div>
  )
}
export default Home