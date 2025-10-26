"use client";
import { Button } from "@/components/button/Button";

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 hero">
        <div className="contenido">
          <h1>
            <span className="block span1">WEB </span>
            <span className="block span2">DEVELOPER</span>
          </h1>
          <div className="descriptionHome">
            <p>
              This is my portfolio. I transform bold ideas into unique digital
              experiences. Designer, developer, and adventurer who creates with
              passion and without limits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

//<Button onClick={handleClick} label="Click" />
