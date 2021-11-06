import React from "react";
import { Link } from "gatsby";

// Components
import Button from "../components/Button";

const NotFound = () => (
  <div className="container my-10 mx-auto px-8 text-center lg:text-left">
    <h1 className="text-3xl lg:text-5xl font-semibold text-center my-5">
      Not Found
    </h1>
    <p className="text-center">You just hit a page that doesn't exist...</p>
    <div className="container flex justify-center mx-auto my-5">
      <Link to="/">
        <Button className="text-center">Go Back To Home</Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
