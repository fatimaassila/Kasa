import './style.scss'
function Banner( {img , title }) {
   
    return (
        <div className="banner">
        <img className="banner-img" src={img} alt="Bannière" />
        <div className="banner-sombre"></div>
        <span className="banner-title">{title}</span>
      </div>
    ) 
}
export default Banner
