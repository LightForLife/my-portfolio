import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div>
      <div className="border border-red-500 rounded-full h-[200px] w-[200px]" />
      <div className="border border-red-500 rounded-full h-[200px] w-[200px]"></div>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default BackgroundCircles;
