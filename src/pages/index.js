import React from 'react';
import Siphon from '../svg/Siphon';
import Abigail from '../svg/Abigail';
import Card from '../components/Card';
import MathVsEng from '../svg/MathVsEng';
import Button from '../components/Button';
import GradesImage from '../svg/GradesImage';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import EffectOfInternet from '../svg/EffectOfInternet';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex gap-10">
        <div
          className="text-center lg:text-left lg:w-1/2"
          style={{
            marginBottom: '1.5rem',
          }}
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Getting you closer to your students' life.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            <b>EduMine</b> is a web application that takes in the academic and socio-demographic
            data of students and uses smart algorithms to reach meaningful conclusions.
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink href="#earlyAccess">
              <Button size="lg">Register For Early Access</Button>
            </AnchorLink>
          </p>
        </div>
        <div className="lg:w-2/4">
          <GradesImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Automatic Pattern Recognition</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Prediction Of Likely Outcomes</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Optimized Clustering</p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto text-center">
        <p className="font-light text-xl">
          For the demonstration of the features listed above, we used sample data from various
          schools. All the names listed below are hypothetical.
        </p>
      </div>
    </section>

    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-4xl font-semibold leading-tight">Automatic Pattern Recognition</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            One dot corresponds to one student. The horizontal axis represents the student’s average
            and the vertical axis represents the time he/she spends on the internet per day. From
            this graph we can deduce that the students represented by the blue dots have their
            scores compromised by the extensive use of the internet.
          </p>
        </div>
      }
      secondarySlot={<EffectOfInternet />}
    />
    <div className="container mx-auto px-16 items-center">
      <h3 className="text-4xl font-semibold leading-tight">Prediction Of Likely Outcomes</h3>
      <p className="mt-8 text-xl font-light leading-relaxed">
        The following are examples to show how the prediction feature of{' '}
        <b
          style={{
            color: 'rgb(65, 153, 225)',
          }}
        >
          EduMine
        </b>{' '}
        could be used.
      </p>
    </div>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Siphon Melese</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The application predicted Siphon’s 12th Grade score by using a smart machine learning
            algorithm. By noting that she will{' '}
            <b
              style={{
                color: 'rgb(65, 153, 225)',
              }}
            >
              score low
            </b>
            , it tried to map the problem and present a solution by analyzing her socio-demographic
            data.
          </p>
        </div>
      }
      secondarySlot={<Siphon />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Abigail Million</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The application predicted Abigail’s 12th Grade score by using a similar algorithm. By
            noting that she will{' '}
            <b
              style={{
                color: 'rgb(65, 153, 225)',
              }}
            >
              score high
            </b>
            , the machine listed the factors responsible for her excellence.
          </p>
        </div>
      }
      secondarySlot={<Abigail />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Optimized Clustering</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The horizontal axis represents an entire high school’s English scores. The vertical axis
            represents their math scores. The students represented by green dots have exceptional
            math and English skills while the students represented by the purple dots need
            assistance in those subjects.
          </p>
        </div>
      }
      secondarySlot={<MathVsEng />}
    />
    <section
      id="earlyAccess"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">Ready to know more about your students?</h3>
      <p className="mt-8 text-xl font-light">
        If you register for the early access. You will get a free trial for <b>one month</b>.
      </p>
      <form>
        <input
          type="text"
          className="rounded text-1xl p-5 m-5"
          placeholder="Your school's name"
          style={{
            width: '80%',
          }}
        />
        <br />
        <input
          type="number"
          className="rounded text-1xl p-5 m-5"
          placeholder="Your school's phone number"
          style={{
            width: '80%',
          }}
        />
        <p className="mt-8">
          <Button size="xl">Register For Early Access</Button>
        </p>
      </form>
    </section>
  </Layout>
);

export default Index;
