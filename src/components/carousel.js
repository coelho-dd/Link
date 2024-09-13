import { useEffect, useRef } from "react";
import AvalCard from "./avalCard";
import './../styles/carousel.css';

export default function Carousel() {
    return (
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-linkBlack to-transparent backdrop-blur-lg"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-linkBlack to-transparent backdrop-blur-lg"></div>
    
          <div
            className="flex gap-8 w-full animate-scroll space-x-8"
            style={{ whiteSpace: "nowrap" }}
          >
            <AvalCard
              name="Client 1"
              message="Amazing service! Highly recommend."
            />
            <AvalCard
              name="Client 2"
              message="Very professional and creative solutions."
            />
            <AvalCard
              name="Client 3"
              message="Exceptional quality and fast delivery."
            />
            <AvalCard
              name="Client 4"
              message="Really impressed with their work."
            />
            <AvalCard
              name="Client 5"
              message="Fast and reliable service!"
            />
          </div>
        </div>
      );
}