import logo from '../assets/logo.png';
import './../styles/header.css';

export default function Header() {
    return (
        <header className="flex justify-around items-center mx-auto pt-10 font-sans text-linkWhite">
            <img src={logo} alt="Logo agência Link" className="h-24 rounded-full" />
            <nav>
                <ul className="flex justify-evenly space-x-2 text-lg">
                    <li><a href="#" className="p-2 px-4 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Home</a></li>
                    <li><a href="#" className="p-2 px-4 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Sobre nós</a></li>
                    <li><a href="#" className="p-2 px-4 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Serviços</a></li>
                    <li><a href="#" className="p-2 px-4 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Avaliações</a></li>
                </ul>
            </nav>
            <a href="#" className="text-linkBlack font-medium text-lg px-5 py-2 bg-offWhite rounded-xl">Entre em Contato</a>
        </header>
    );
}