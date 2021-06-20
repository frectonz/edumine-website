import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';

const NotFound = () => (
  <Layout>
    <div className="container mx-auto px-8 text-center lg:text-left">
      <h1 className="text-3xl lg:text-5xl font-semibold text-center my-5">Not Found</h1>
      <p className="text-center">You just hit a page that doesn't exist...</p>
      <div
        className="container mx-auto my-5"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href="/">
          <Button className="text-center">Go Back To Home</Button>
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFound;
