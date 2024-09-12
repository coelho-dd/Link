import img from '../assets/code.jpg';
import './../styles/mainText.css';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

export default function MainText() {
    return (
        <main className="flex items-center justify-between w-4/5 mx-auto gap-60 text-linkWhite">
            <div id="main" className="w-1/2">
                <h3>Agência Link</h3>
                <h1 className="text-6xl font-semibold">
                    Impulsione os resultados da sua empresa com uma presença digital estratégica
                </h1>
                <div className="flex">
                    <button id="botao1" className="flex items-center">Comece Agora<FaArrowRight className="mr-1 ml-2" /></button>
                    <button id="botao2" className="flex items-center">Saiba Mais<FaArrowDown className="mr-1 ml-2" /></button>
                </div>
            </div>

            <div className="w-1/2 flex justify-center">
                <img src={img} alt="Imagem principal do site" className="max-w-full h-auto rounded-3xl" />
            </div>
        </main>
    );
}