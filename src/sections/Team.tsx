import React from "react";

// Components
import Card from "../components/Card";

// Pics
import fraol from "../assets/team/fraol.webp";
import nebiyu from "../assets/team/nebiyu.png";
import muferiha from "../assets/team/muferiha.png";

export default function Team() {
  return (
    <section id="meetTheTeam" className="py-20 lg:pb-20 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">THE EDUMINE TEAM</h2>
        <div className="flex flex-col md:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="person my-4 flex">
                <img src={nebiyu} alt="Nebyu Elias" />
              </div>
              <p className="font-semibold text-xl">Nebyu Elias</p>
              <b>CEO</b>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="person my-4 flex">
                <img src={fraol} alt="Fraol Lemecha" />
              </div>
              <p className="font-semibold text-xl">Fraol Lemecha</p>
              <b>CTO</b>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="person my-4 flex">
                <img src={muferiha} alt="Muferiha Ahmed" />
              </div>
              <p className="font-semibold text-xl">Muferiha Abdulbasit</p>
              <b>CFO</b>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
