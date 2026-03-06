import React from "react";
import HeroSobreNosotros from "../components/sections/HeroSobreNosotros";
import QuienesSomos from "../components/sections/QuienesSomos";
export default function SobreNosotros() {
    return (
        <div className="flex-grow-1">
            <HeroSobreNosotros />
            <QuienesSomos />
        </div>
    );
}