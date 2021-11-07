import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Components
import Card from "../components/Card";

// Svgs
import Ai from "../assets/svgs/Ai.svg";
import Goal from "../assets/svgs/Goal.svg";
import Cluster from "../assets/svgs/Cluster.svg";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:pb-20 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-4 mt-12">
          <div className="px-3">
            <AnchorLink href="#storageUnit">
              <Card className="mb-8">
                <div className="my-2">
                  <Cluster className="w-40 mx-auto" />
                </div>
                <p className="font-semibold text-xl text-black">
                  An Effective Storage Unit
                </p>
              </Card>
            </AnchorLink>
          </div>
          <div className="px-3">
            <AnchorLink href="#smartSchool">
              <Card className="mb-8">
                <div className="my-2">
                  <Goal className="w-40 mx-auto" />
                </div>
                <p className="font-semibold text-xl text-black">
                  A smart school management system
                </p>
              </Card>
            </AnchorLink>
          </div>
          <div className="px-3">
            <AnchorLink href="#dataAnalysis">
              <Card className="mb-8">
                <div className="my-2">
                  <Ai className="w-40 mx-auto" />
                </div>
                <p className="font-semibold text-xl text-black">
                  A data analysis engine
                </p>
              </Card>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
