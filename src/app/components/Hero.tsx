"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import foto4 from "../../../public/foto4.png";

type Props = {};

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: [
      "Hi, The Name's Artur Levchenko",
      "Guy-who-loves-Coffe.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={foto4}
        width={600}
        height={600}
        alt="Picture of the author"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
