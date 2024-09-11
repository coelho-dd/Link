import './../styles/about.css';

export default function About() {
    return (
        <>
            <section id="about" className="flex flex-col justify-center items-center">
                <h3 className="text-2xl">Sobre a Link</h3>
                <h1 className="mt-10 mb-5 w-2/4 text-3xl text-center">Estamos aqui para conectar a sua empresa ao ambiente com maior potencial de crescimento do mundo.</h1>
                <p className="w-2/4 m-5 text-lg text-center">
                    Na <strong>Link</strong> somos mais do que uma agência de desenvolvimento web &mdash; somos o elo que conecta sua empresa ao ambiente digital de maior potencial de crescimento.
                    Com soluções personalizadas, tecnologias de ponta e foco em resultados, ajudamos startups e pequenas empresas a expandirem suas operações online de forma eficaz. Contrate
                    a <strong>Link</strong> e transforme sua presença digital em uma verdadeira vantagem competitiva.
                </p>
                <button className="bg-linkBlack text-linkWhite font-medium text-lg px-5 py-2 rounded-xl">Entre em contato conosco</button>
            </section>
        </>
    );
}