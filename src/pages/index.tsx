import React from "react";

// Components
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";

// PNGs
import summary from "../assets/showcase/summary.png";
import edumine from "../assets/showcase/edumine.png";
import versamel from "../assets/showcase/versamel.png";
import analysis from "../assets/showcase/analysis.png";
import prediction from "../assets/showcase/prediction.png";
import clustering from "../assets/showcase/clustering.png";

// Sections
import Map from "../sections/Map";
import Team from "../sections/Team";
import Headline from "../sections/Headline";
import Features from "../sections/Features";
import ContactForm from "../sections/ContactForm";
import HistoryOfEdumine from "../sections/HistoryOfEdumine";

const IndexPage = () => {
  return (
    <Layout>
      <Headline />

      <Features />

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
            src={summary}
            alt="EduMine open showing an overview of a school"
          />
        }
      />

      <SplitSection
        id="storageUnit"
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              An Effective Storage Unit
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
          <img src={versamel} alt="Versamel open showing a list of students" />
        }
      />

      <SplitSection
        id="smartSchool"
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              A smart school management system
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              EduMine is a fully integrated school management system. EduMine
              computerizes clerical jobs like <b>student management</b>,{" "}
              <b>teacher evaluation and management</b>,{" "}
              <b>attendance tracking</b>, <b>finance management</b> and more.
              Helping administrators and parents have a wider view of the
              teaching-learning process.
            </p>
          </div>
        }
        secondarySlot={
          <img src={edumine} alt="EduMine open showing a prediction result" />
        }
      />

      <SplitSection
        id="dataAnalysis"
        primarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              A data analysis engine
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              EduMine is built on advanced machine learning capabilities. Once
              the student data has been encoded in to digital form. You can use
              EduMine to have a deeper understanding of a student both
              individually and as a class. EduMine's data analysis engine has
              two parts <b>The Prediction Engine</b> and{" "}
              <b>The Clustering Engine</b>. Let's see them independently with an
              example.
            </p>
          </div>
        }
        secondarySlot={
          <img src={analysis} alt="EduMine open showing a prediction result" />
        }
      />

      <SplitSection
        id="dataAnalysis"
        className="ml-20"
        primarySlot={
          <img
            src={prediction}
            alt="EduMine open showing a prediction result"
          />
        }
        secondarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              Prediction Engine
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              In the image to the left we can see EduMine showing the prediction
              result of a student named Abigail Million. We can see from the
              graph that Abigail's score's has been decreasing from grade 7 to
              9, but from 9 to 12 her scores start increasing. The red dot on
              the graph shows the next year's predicted result which in this
              case shows that her scores will keep increasing. The x-axis on the
              graph shows the grade and they y-axis shows the scores. In the
              textual representation to the right of the graph we can see the
              exact percentages in which her score in each subject will
              increase.
            </p>
          </div>
        }
      />

      <SplitSection
        id="dataAnalysis"
        className="ml-20"
        primarySlot={
          <img
            src={clustering}
            alt="EduMine open showing a prediction result"
          />
        }
        secondarySlot={
          <div>
            <h3 className="text-4xl font-semibold leading-tight">
              Clustering Engine
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              In the image to the left we can see EduMine showing the clustering
              result of all grade 11th students. Clustering allows us to group
              students based on two parameters. In this case the parameters are{" "}
              <b>online time</b> (the time a student spends online per week) and{" "}
              <b>Math</b> (the Math result of a student in the given year).
              Based on these parameters EduMine has separated the students in to
              four(4) clusters. The y-axis in the graph corresponds to online
              time and the x-axis corresponds to their Math score. Each point
              corresponds to a student. For example let's look at the yellow
              group, we can see that they scored low on their math tests and
              their online time is high. We can concluded that the time they
              spend online has impeded them from scoring high in the test.
            </p>
          </div>
        }
      />

      <HistoryOfEdumine />
      <Team />
      <ContactForm />
      <Map />
    </Layout>
  );
};

export default IndexPage;
