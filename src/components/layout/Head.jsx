import React from "react";

// Helmet
import { Helmet } from "react-helmet";

// logo
import logoPNG from "../../assets/logo/logo.png";

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>EduMine</title>
      <meta
        name="description"
        content="EduMine smart student management system"
      />
      <link rel="icon" type="image/png" href={logoPNG} />
    </Helmet>
  );
}
