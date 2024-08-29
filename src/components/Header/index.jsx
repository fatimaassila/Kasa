import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Header() {
	return (
		<header className='header'>
			<img src={Logo} alt="kasa, location d'appartements" />
            <nav className='nav-button'>
            <NavLink  to='/'>Accueil</NavLink>
            <NavLink  to='/About'>A Propos</NavLink>
            </nav>
		</header>
	)
}
export default Header