import React from "react";
import { ChatIcon } from "@heroicons/react/solid";
import { PhoneIncomingIcon } from "@heroicons/react/solid";


import './styles/MainStyle.css';

import ContactIcons from "./ContactIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 bg-gray-900">
        <div className="flex flex-col w-full">
          <ChatIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-500">
            Contacts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Getting in touch is easy!
          </p>
        </div>
        <ContactIcons/>
      </div>
    </section>
  );
}