import './style.scss'
import logo from '../../assets/logo-footer.png'

function Footer() {
	return (
		<footer className='footer'>
			<img src={logo} alt="logo Kasa agence de location des appartements" />
			<p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer