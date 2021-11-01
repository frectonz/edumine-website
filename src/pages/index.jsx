import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Components
import Card from "../components/Card";
import Button from "../components/Button";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/ContactForm";
import SplitSection from "../components/SplitSection";

// Svgs
import Ai from "../assets/Ai.svg";
import Goal from "../assets/Goal.svg";
import LogoIcon from "../svg/LogoIcon";
import Future from "../assets/Future.svg";
import Cluster from "../assets/Cluster.svg";

// PNGs
import edumine1 from "../assets/edumine1.png";
import edumine2 from "../assets/edumine2.png";
import edumine3 from "../assets/edumine3.png";

import fraol from "../assets/team/fraol.webp";
import nebiyu from "../assets/team/nebiyu.png";
import muferiha from "../assets/team/muferiha.png";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <section className="pt-20 md:pt-40">
          <div className="container mx-auto px-8 lg:flex gap-10">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Smart student management system.
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">
                We are a data-driven, school-centric web and app development
                company. We are obsessed with employing Data- Science in
                educational sectors. Expunging their defects through responsive,
                smart, and sustainable technology.
              </p>
              <p className="mt-8 md:mt-12">
                <AnchorLink href="#earlyAccess">
                  <Button size="lg">Register For Early Access</Button>
                </AnchorLink>
              </p>
            </div>
            <div className="lg:w-2/4">
              <LogoIcon />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 lg:pb-20 lg:pt-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Main Features
            </h2>
            <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:lg:grid-cols-1 gap-4 mt-12">
              <div className="px-3">
                <Card className="mb-8">
                  <div className="my-2">
                    <Ai />
                  </div>
                  <p className="font-semibold text-xl">
                    Applies the fields of AI and Machine Learning to mine
                    students' data
                  </p>
                </Card>
              </div>
              <div className="px-3">
                <Card className="mb-8">
                  <div className="my-2">
                    <Future />
                  </div>
                  <p className="font-semibold text-xl">
                    Predicts students future scores by analyzing their past
                    academic milestones.
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

        <section id="services" className="py-10">
          <div className="container mx-auto px-16 items-center container mx-auto text-center">
            <p className="font-light text-xl">A description of EduMine</p>
          </div>
        </section>

        <SplitSection
          primarySlot={
            <div>
              <h3 className="text-4xl font-semibold leading-tight">
                Executive Summary
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Edumine is a smart school management system to manage
                school-related data and transactions with data science,
                artificial intelligence, and machine learning. Edumine consists
                of a storage unit, data mining engine, and analytic showcase. It
                contains an extensive conduct system for students, staff,
                teachers, student’s parents, managerial staff, etc. Maintaining
                school information is a big challenge various approaches are
                used to effectively manage such types of clerical works.
              </p>
            </div>
          }
          secondarySlot={
            <img
              src={edumine1}
              alt="EduMine open showing an overview of a school"
            />
          }
        />

        <SplitSection
          reverseOrder
          primarySlot={
            <div>
              <h3 className="text-4xl font-semibold leading-tight">
                Prediction
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Uses smart algorithms to analyze and provide readable data.
              </p>
            </div>
          }
          secondarySlot={
            <img
              src={edumine2}
              alt="EduMine open showing a prediction result"
            />
          }
        />

        <SplitSection
          primarySlot={
            <div>
              <h3 className="text-4xl font-semibold leading-tight">
                Clustering
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Uses smart algorithms to cluster students and provide
                graph-backed analysis.
              </p>
            </div>
          }
          secondarySlot={
            <img
              src={edumine3}
              alt="EduMine open showing a clustering result"
            />
          }
        />

        <section id="meetTheTeam" className="py-20 lg:pb-20 lg:pt-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              THE EDUMINE TEAM
            </h2>
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
                  <p className="font-semibold text-xl">Muferiha Ahmed</p>
                  <b>CFO</b>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </Layout>
    </>
  );
};

export default IndexPage;
