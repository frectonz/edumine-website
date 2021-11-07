import React from "react";

// Components
import Timeline from "../components/Timeline";

export default function HistoryOfEdumine() {
  return (
    <section id="history" className="py-20 lg:pb-20 lg:pt-48">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold py-10">
          About EduMine Technologies
        </h2>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <Timeline heading="Founded in 2019" />
          <Timeline
            reverse
            heading="Taking part in the first batch of startup incubation organized by KOICA and MinT"
          />
        </div>
      </div>
    </section>
  );
}
