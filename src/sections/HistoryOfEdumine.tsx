import React from "react";

// Components
import SingleTimeline from "../components/Timeline";

export default function HistoryOfEdumine() {
  return (
    <section className="py-20 lg:pb-20 lg:pt-48">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold py-10">
          About EduMine Technologies
        </h2>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <SingleTimeline
            reverse
            heading="Taking part in the first batch of startup incubation organized by KOICA and MinT"
          />
          <SingleTimeline heading="Founded in 2019" />
        </div>
      </div>
    </section>
  );
}
