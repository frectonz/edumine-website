import React from "react";

// Components
import Button from "./Button";

export default function ContactForm() {
  return (
    <section
      id="earlyAccess"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">
        Ready to know more about your students?
      </h3>
      <form name="school" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="school" />
        <div>
          <input
            type="text"
            name="schoolName"
            className="rounded text-1xl p-5 m-5"
            placeholder="Your school's name"
            style={{
              width: "80%",
            }}
          />
        </div>
        <div>
          <input
            type="number"
            name="schoolNumber"
            className="rounded text-1xl p-5 m-5"
            placeholder="Your school's phone number"
            style={{
              width: "80%",
            }}
          />
        </div>
        <p className="mt-8">
          <Button>Register For Early Access</Button>
        </p>
      </form>
    </section>
  );
}
