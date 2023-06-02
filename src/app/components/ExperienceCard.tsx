"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://34travel.me/media/upload/images/2020/MAY/arch2020/1.jpg"
        alt=""
      />
    </article>
  );
}
