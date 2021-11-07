import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Components
import Button from "../components/Button";
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";

// Svgs
import LogoIcon from "../assets/svgs/Logo.svg";

// PNGs
import edumine1 from "../assets/showcase/edumine1.png";
import edumine2 from "../assets/showcase/edumine2.png";
import edumine3 from "../assets/showcase/edumine3.png";

import versamel1 from "../assets/showcase/versamel1.png";
import versamel2 from "../assets/showcase/versamel2.png";

// Sections
import Team from "../sections/Team";
import Features from "../sections/Features";
import ContactForm from "../sections/ContactForm";
import HistoryOfEdumine from "../sections/HistoryOfEdumine";

const IndexPage = () => {
  return (
    <Layout>
      <section id="headline" className="pt-20 md:pt-40">
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

      <Features />

      <section id="services" className="py-10">
        <div className="container mx-auto px-16 items-center container mx-auto text-center">
          <h1 className="font-light text-2xl">Features of EduMine</h1>
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
              school-related data and transactions with data science, artificial
              intelligence, and machine learning. Edumine consists of a storage
              unit, data mining engine, and analytic showcase. It contains an
              extensive conduct system for students, staff, teachers, student’s
              parents, managerial staff, etc. Maintaining school information is
              a big challenge various approaches are used to effectively manage
              such types of clerical works.
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
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">Prediction</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Uses smart algorithms to analyze and provide readable data. The
              prediction of the future scores of a student by analyzing his past
              data (academic and socio-demographic).
            </p>
          </div>
        }
        secondarySlot={
          <img src={edumine2} alt="EduMine open showing a prediction result" />
        }
      />

      <SplitSection
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">Clustering</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Uses smart algorithms to cluster students and provide graph-backed
              analysis. Grouping of symbiotic students based on their academic
              and socio-demographic data.
            </p>
          </div>
        }
        secondarySlot={
          <img src={edumine3} alt="EduMine open showing a clustering result" />
        }
      />

      <SplitSection
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              Smart Algorithmic Analysis
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once EduMine is equipped with data, it will display an
              introspective analytic view of each class/section and employ two
              widely used algorithms in Artificial Intelligence on the data:
              Prediction and Clustering.
            </p>
          </div>
        }
        secondarySlot={
          <img src={edumine1} alt="Versamel open showing a list of students" />
        }
      />

      <SplitSection
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              Storage Unit
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              EduMine comes with Versamel, a software developed by our company.
              Versamel is a simple, intuitive, and smart data collection tool
              made for schools. It encodes a student's sociodemographic and
              academic data on excel sheets.
            </p>
          </div>
        }
        secondarySlot={
          <img src={versamel1} alt="Versamel open showing a list of students" />
        }
      />

      <SplitSection
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              Computerizes the clerical jobs
            </h3>
            <ul className="list-disc p-8 text-xl font-light leading-relaxed">
              <li>Financial management system</li>
              <li>Student navigation</li>
              <li>Attendance tracker (For students and teachers)</li>
              <li>Teacher evaluation system (Student based)</li>
              <li>
                Teacher management system Certificate and Roster publisher
              </li>
            </ul>
          </div>
        }
        secondarySlot={
          <img src={versamel2} alt="Versamel open showing a list of students" />
        }
      />

      <HistoryOfEdumine />
      <Team />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
