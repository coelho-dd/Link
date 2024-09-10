import img from '../assets/code.jpg';
import './../styles/mainText.css';

export default function MainText() {
    return (
        <main className="flex items-center justify-between w-4/5 mx-auto gap-60 text-linkWhite">
            <div id="main" className="w-1/2">
                <h3>Agência Link</h3>
                <h1 className="text-6xl font-semibold">
                    Impulsione os resultados da sua empresa com uma presença digital estratégica.
                </h1>
                <button id="botao1">Comece Agora</button>
                <button id="botao2">Saiba Mais</button>
            </div>

            <div className="w-1/2 flex justify-center">
                <img src={img} alt="Imagem principal do site" className="max-w-full h-auto rounded-3xl" />
            </div>
        </main>
    );
}