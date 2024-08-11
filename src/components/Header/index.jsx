import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './style.scss'

function Header() {
	return (
		<header className='header'>
			<img src={Logo} alt="kasa, location d'appartements" />
            <nav className='nav-button'>
            <Link  to='/'>Accueil</Link>
            <Link  to='/About'>A Propos</Link>
            </nav>
		</header>
	)
}
export default Header