import AvalCard from "./avalCard";
import { FaRegStar } from "react-icons/fa";
import Carousel from "./carousel";

export default function Aval() {
    return (
        <>
            <section className="w-4/5 mx-auto pb-20 text-linkWhite">
                <h2 className="text-5xl font-semibold mb-20">O que nossos clientes acham</h2>
                <div>
                    <Carousel />
                </div>
            </section>
        </>
    );
}