import logo from '../assets/link-logo3.png';

export default function Header() {
    return (
        <header className="flex justify-between items-center w-4/5 mx-auto my-10 font-sans text-linkWhite">
            <img src={logo} alt="Logo agência Link" className="h-24 rounded-full" />
            <nav>
                <ul className="flex justify-evenly space-x-8 text-lg">
                    <li><a href="#" className="p-2 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Home</a></li>
                    <li><a href="#" className="p-2 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Sobre nós</a></li>
                    <li><a href="#" className="p-2 transition duration-200 ease-in hover:bg-offWhite hover:font-medium hover:text-linkBlack rounded-xl">Portfolio</a></li>
                </ul>
            </nav>
            <a href="#" className="text-linkBlack font-medium text-lg p-3 py-2 bg-offWhite rounded-xl">Entre em Contato</a>
        </header>
    );
}