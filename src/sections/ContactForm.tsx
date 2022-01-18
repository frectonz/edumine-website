import React from "react";

// Components
import Button from "../components/Button";

export default function ContactForm() {
  return (
    <section
      id="earlyAccess"
      className="container mx-auto my-20 py-20 text-center"
    >
      <div className="py-4 bg-gray-200 rounded-lg">
        <h3 className="text-5xl font-semibold my-6">
          Ready to know more about your students?
        </h3>
        <form
          name="school"
          method="POST"
          data-netlify="true"
          className="w-5/6 mx-auto"
        >
          <input type="hidden" name="form-name" value="school" />
          <div>
            <input
              type="text"
              name="schoolName"
              className="w-full rounded text-1xl p-5 m-5"
              placeholder="Your school's name"
            />
          </div>
          <div>
            <input
              name="schoolNumber"
              className="w-full rounded text-1xl p-5 m-5"
              placeholder="Your school's phone number"
            />
          </div>
          <p className="mt-8">
            <Button>Register For Early Access</Button>
          </p>
        </form>
      </div>
    </section>
  );
}
