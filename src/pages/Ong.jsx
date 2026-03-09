import React from "react";
import Hero from "../components/sections/ong/HeroOng";
import Carrucel from "../components/sections/ong/InfOng"
export default function Ong() {
    return (
        <div className="flex-grow-1">
            <Hero />
            <Carrucel />
        </div>
    );
}