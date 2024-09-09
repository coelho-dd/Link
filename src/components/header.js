import logo from '../assets/link-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo agência Link" className="" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </nav>
            <a href="#">Entre em Contato</a>
        </header>
    );
}