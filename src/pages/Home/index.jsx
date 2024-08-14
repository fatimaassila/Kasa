
import imgHomeBanner from '../../assets/imgBanner.png'
import Banner from '../../components/Banner'
import data from '../../data/data.json'
import Card from '../../components/Card'
import './style.scss'

function Home() {
    return (
        
  <div>
    <Banner title="Chez vous, partout et ailleurs" img={imgHomeBanner} />
    <div className='card-container'>
     {data.map((data, index) => (
      <Card
      key={`${data.id}-${index}`}
      img={data.cover}
      title={data.title}
      location={data.location}
      />
      ))}
    </div>
   </div>
  )
}

export default Home