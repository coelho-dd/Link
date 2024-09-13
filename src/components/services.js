import './../styles/services.css';
import Card from './card.js';
import { FcAdvertising, FcAutomatic, FcMultipleDevices, FcVoicePresentation } from 'react-icons/fc';

export default function Services() {
    return (
        <>
            <section className="w-4/5 mx-auto pb-20 text-linkWhite">
                <h1 className="text-5xl font-semibold mb-20">Serviços oferecidos</h1>
                <div className="flex justify-center items-center">
                    <Card icon={<FcMultipleDevices />} value={"Desenvolvimento de Sites e Aplicativos Web"} text={"Front-end completo: Desenvolvimento de interfaces modernas e responsivas com React e Tailwind. Back-end e APIs: Construção de APIs e integrações usando Next.js e PostgreSQL."} />
                    <Card icon={<FcAdvertising />} value={"Criação de Landing Pages"} text={"Desenvolvimento de páginas promocionais e de conversão, perfeitas para campanhas de marketing, captação de leads, etc."} />
                    <Card icon={<FcAutomatic />} value={"Manutenção e Atualização de Sites"} text={"Planos de suporte para garantir que os sites e aplicativos estejam sempre atualizados e funcionando perfeitamente."} />
                    <Card icon={<FcVoicePresentation />} value={"Consultoria Tecnológica"} text={"Auxílio na escolha de tecnologias e estruturas para startups que estão começando e precisam de orientações estratégicas."} />
                </div>
            </section>
        </>
    );
}