import Iglogo from '../assets/instagram.svg'
import share from '../assets/share.png'

export default function Header() {
    return (
        <header>
            <img src={Iglogo} alt="Photo Button" />
            <span className='ig-logo'>Instagram</span>
            <img src={share} alt="Texts Button" />
        </header>
    )
}