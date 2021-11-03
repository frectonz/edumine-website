import React from "react";

// Components
import Card from "../components/Card";

// Svgs
import Ai from "../assets/Ai.svg";
import Goal from "../assets/Goal.svg";
import Future from "../assets/Future.svg";
import Cluster from "../assets/Cluster.svg";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:pb-20 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:lg:grid-cols-1 gap-4 mt-12">
          <div className="px-3">
            <Card className="mb-8">
              <div className="my-2">
                <Ai />
              </div>
              <p className="font-semibold text-xl">
                Applies the fields of AI and Machine Learning to mine students'
                data
              </p>
            </Card>
          </div>
          <div className="px-3">
            <Card className="mb-8">
              <div className="my-2">
                <Future />
              </div>
              <p className="font-semibold text-xl">
                Predicts students future scores by analyzing their past academic
                milestones.
              </p>
            </Card>
          </div>
          <div className="px-3">
            <Card className="mb-8">
              <div className="my-2">
                <Goal />
              </div>
              <p className="font-semibold text-xl">
                Associates students with common interests, talents and goals
                from different schools.
              </p>
            </Card>
          </div>
          <div className="px-3">
            <Card className="mb-8">
              <div className="my-2">
                <Cluster />
              </div>
              <p className="font-semibold text-xl">
                Clusters symbiotic groups based off of their academic and
                socio-demographic Data.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
