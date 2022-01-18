import React from "react";

function Line() {
  return (
    <div
      style={{ zIndex: -100 }}
      className="h-full w-6 flex items-center justify-center"
    >
      <div
        style={{ zIndex: -100 }}
        className="h-full w-1 bg-blue-800 pointer-events-none"
      />
    </div>
  );
}

function Circle() {
  return (
    <div
      style={{ zIndex: -100 }}
      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
    />
  );
}

interface TimelineProps {
  reverse?: boolean;
  heading: string;
  text?: string;
}

export default function SingleTimeline({
  text,
  heading,
  reverse = false,
}: TimelineProps) {
  return reverse ? (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{heading}</h3>
        <p className="leading-tight text-justify">{text}</p>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <Line />
        <Circle />
      </div>
    </div>
  ) : (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <Line />
        <Circle />
      </div>
      <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{heading}</h3>
        <p className="leading-tight text-justify">{text}</p>
      </div>
    </div>
  );
}
