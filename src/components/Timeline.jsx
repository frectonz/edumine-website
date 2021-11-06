import React from "react";

function Circle() {
  return (
    <div
      style={{ zIndex: "-100" }}
      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
    />
  );
}

function Line() {
  return (
    <div
      style={{ zIndex: "-100" }}
      className="h-full w-6 flex items-center justify-center"
    >
      <div
        style={{ zIndex: "-100" }}
        className="h-full w-1 bg-blue-800 pointer-events-none"
      />
    </div>
  );
}

function Reverse() {
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">
          Taking part in the first batch of startup incubation organized by
          KOICA and MinT
        </h3>
        <p className="leading-tight text-justify"></p>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <Line />
        <Circle />
      </div>
    </div>
  );
}

function Single() {
  return (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <Line />
        <Circle />
      </div>
      <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">Founded in 2019</h3>
        <p className="leading-tight text-justify"></p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="py-20 lg:pb-20 lg:pt-48">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold py-10">
          About EduMine Technologies
        </h2>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <Single />
          <Reverse />
        </div>
      </div>
    </section>
  );
}
